const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Get command line arguments
const args = process.argv.slice(2);
const showHelp = args.includes('--help') || args.includes('-h');
const watchMode = args.includes('--watch') || args.includes('-w');

// Remove watch flags from args for processing other arguments
const filteredArgs = args.filter(arg => !['--watch', '-w', '--help', '-h'].includes(arg));

const SEARCH_PATTERN = filteredArgs[0] || '**/*.css';
const OUTPUT_FILE = filteredArgs[1] || 'custom-properties.css';
const IGNORE_PATTERN = filteredArgs[2] || '**/*fluent*.css';
const EXCLUDE_PATTERN = `!${OUTPUT_FILE}`;

if (showHelp) {
    console.log(`Usage: node extract-custom-properties.js [glob_pattern] [output_file] [ignore_pattern] [--watch]\n` +
        `  glob_pattern: Glob pattern for files to search (default: '**/*.css')\n` +
        `  output_file:  Output CSS file (default: 'custom-properties.css')\n` +
        `  ignore_pattern: Glob pattern for files to ignore (default: '**/*fluent*.css')\n` +
        `  --watch, -w: Watch for file changes and regenerate automatically\n` +
        `Example: node extract-custom-properties.js 'styles/**/*.css' my-vars.css '**/ignore*.css' --watch`);
    process.exit(0);
}

// Function to extract custom properties from CSS content
function extractCustomProperties(content) {
    const customPropertyRegex = /--[a-zA-Z0-9-]+/g;
    const matches = content.match(customPropertyRegex) || [];
    return [...new Set(matches)]; // Remove duplicates
}

// Function to process files and generate output
async function processFiles() {
    try {
        // Get all CSS files except the output file and ignored files
        const files = await glob(SEARCH_PATTERN, { ignore: [EXCLUDE_PATTERN, IGNORE_PATTERN] });

        // Collect all custom properties
        const customProperties = new Set();
        
        for (const file of files) {
            const content = fs.readFileSync(file, 'utf8');
            const properties = extractCustomProperties(content);
            properties.forEach(prop => customProperties.add(prop));
        }

        const comment =`/*built by extract-custom-properties.js, don't edit this file manually.\nThis file is used to trick tailwind into using all custom properties in the codebase.*/`
        // Create the CSS content with reflexive structure
        const cssContent = `${comment}\n\n.ensure-tailwind-import {\n${Array.from(customProperties)
            .map(prop => `  ${prop}: var(${prop});`)
            .join('\n')}\n}`;

        // Write to output file
        fs.writeFileSync(OUTPUT_FILE, cssContent);
        console.log(`Successfully extracted ${customProperties.size} custom properties to ${OUTPUT_FILE}`);
        
        return files; // Return the list of files for watch mode
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

// Function to set up file watchers
async function setupWatchers() {
    console.log('Setting up file watchers...');
    
    const files = await processFiles(); // Initial processing
    const watchedDirs = new Set();
    
    // Watch directories containing the matched files
    for (const file of files) {
        const dir = path.dirname(file);
        if (!watchedDirs.has(dir)) {
            watchedDirs.add(dir);
            
            try {
                fs.watch(dir, { recursive: false }, (eventType, filename) => {
                    if (filename && filename.endsWith('.css') && !filename.includes('fluent')) {
                        console.log(`File ${filename} changed, regenerating...`);
                        processFiles().catch(console.error);
                    }
                });
                console.log(`Watching directory: ${dir}`);
            } catch (error) {
                console.warn(`Could not watch directory ${dir}:`, error.message);
            }
        }
    }
    
    // Also watch for new files in the styles directory if it exists
    const stylesDir = 'styles';
    if (fs.existsSync(stylesDir) && !watchedDirs.has(stylesDir)) {
        try {
            fs.watch(stylesDir, { recursive: true }, (eventType, filename) => {
                if (filename && filename.endsWith('.css') && !filename.includes('fluent')) {
                    console.log(`File ${filename} changed in styles directory, regenerating...`);
                    processFiles().catch(console.error);
                }
            });
            console.log(`Watching styles directory recursively: ${stylesDir}`);
        } catch (error) {
            console.warn(`Could not watch styles directory:`, error.message);
        }
    }
    
    console.log('File watchers set up. Press Ctrl+C to stop watching.');
}

// Run the script
if (watchMode) {
    setupWatchers().catch(console.error);
} else {
    processFiles();
} 