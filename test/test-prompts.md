# Test Prompts

---

The image @index.png shows the rendered visual of @index.html . Using these as baseline examples of html, can you please write a new @test.html  page to look something like @test.png ? Do not look at any other files. Primarily focus on layout, do not "visual" styles to elements like buttons, inputs, links, instead let the imported styles do their work.

<!-- Result: including index.png seems to be throwing off the model. It just reproduces index.html. Cursor might not be specifying which image is which? -->

---

**The Task**
Using @index.html as baseline examples of html with the mirai.css library, please look at @test.png and write a new @test.html page

**Rules**
- Do not look at any other files other than those mentioned
- The imported `mirai.css` file contains styles for most native html elements. This includes: input, button, a, all text elements, dialog, details, progress, select, textarea, radio, checkbox, table. Do not style these elements directly other than for layout purposes
- Use the markup in @index.html as an example of using mirai.css

<!-- Result: better, but still unacceptably bad. Model doesn't know how to use variables properly. there are lots of other layout issues. -->

---

**The Task**
Using @index.html as baseline examples of html with the mirai.css library, please look at @test.png and write a new @test.html page.

**Rules**
- Do not look at any other files other than those mentioned
- The imported `mirai.css` file contains styles for most native html elements. This includes: input, button, a, all text elements, dialog, details, progress, select, textarea, radio, checkbox, table. Do not style these elements directly other than for layout purposes
- Use the markup in @index.html  as an example of using mirai.css
- Use @mirai.css.md as a reference for what vars are available

<!-- Result: Individual component usage is really good. Layout is totally wonky, model does not know what classes from index.html example are from mirai and what are not... -->

<!-- Result 2: Claude-3.5-sonnet - less good than last time somehow... -->

<!-- Result 3: Gemini 2.5 pro - better layout, too much styling, added js  -->

---

You are a coding assistant that only writes in semantic html and css. Your current task is to reproduce @test.png in @test.html . Please write in only unstyled semantic html. We want the default look of the browser. Only use css for basic responsive layout and positioning.

<!-- Result: gpt4.1 - back to basics, pretty good output -->

---

You are a coding assistant that only writes in semantic html and css. Your current task is to reproduce @test.png in @test.html . Please write in only unstyled semantic html. We want the default look of the browser. Only use css for basic responsive layout, display, position, margin, padding, gap, etc... Please add spacing between elements and padding around content blocks where appropriate; Elements should never touch eachother or borders. Please **do not** write css for visual styling of elements. ie no color, background color, font-size, or anything else that changes the default appearance of native html elements. In cases where semantic html dictates the use of a list, you may unstyle the default list in order to layout list elements in a row or other layout. 

<!-- Result: better layout, but still adding visual styles -->

---

You are a coding assistant that only writes in semantic html and css. Your current task is to reproduce @test.png in @test.html .  

Please write in only unstyled semantic html. We want the default look of the browser. 

Only use css only for basic responsive *layout* properties. Please add spacing between elements and padding around content blocks where appropriate; Elements should never touch each other or borders. 

**Layout** refers to css layout modes and their related properties. This includes block layout, inline layout, flex, layout, grid layout, and positioned layout. This also includes properties that control the box model sizing including height, width, margin, padding and gap.

Please **do not** write css to style the *appearance* of elements. You may style the appearance of text using the appropriate semantic html tag: `<b>` for bold, `<i>` for italic, etc.

**Appearance** refers to css that styles the any color or text property - this includes color, background, box-shadow, or anything with font. 

In cases where semantic html dictates the use of a `<ul>` or `<ol>`list, you may unstyle the default list in order to layout list elements in a row or other layout.

please keep the linked stylesheet at the top

<!-- Result: Wow, pretty good, we lost the responsive part and it still styled the border and border-radius, but we are getting there -->

---

You are a coding assistant that only writes in semantic html and css. Your current task is to reproduce  @test.png  in @test.html .  

Please write in only unstyled semantic html. We want the default look of the browser. 

Only use css only for basic *layout* properties. Please add spacing between elements and padding around content blocks where appropriate. Elements should never touch each other or borders. Please create responsive layouts that will resize to fit the screen by: minimizing the use of explicit size values for height, width, flex-basis.

**Layout** refers to css layout modes and their related properties. This includes block layout, inline layout, flex, layout, grid layout, and positioned layout. This also includes properties that control the box model sizing including height, width, margin, padding and gap. (Please do not style table layout properties like border-collapse or border-spacing)

Please **do not** write css to style the *appearance* of elements. You may style the appearance of text using the appropriate semantic html tag: `<b>` for bold, `<i>` for italic, etc.

**Appearance** refers to css that styles the any color or text property - this includes color, background, box-shadow, or anything with font. 

In cases where semantic html dictates the use of a `<ul>` or `<ol>`list, you may unstyle the default list in order to layout list elements in a row or other layout.

All css should be applied via `#id` or `.class-name` selectors. Do not select by element name.
 
Please keep the linked stylesheet at the top

<!-- Result: kinda better. -->

---

You are a coding assistant that only writes in semantic html and css. Your current task is to reproduce  @test.png  in @test.html .  

Only use css only for basic *layout* properties. Please add spacing between elements and padding around content blocks where appropriate. Elements should never touch each other or borders. Please create responsive layouts that will resize to fit the screen by: minimizing the use of explicit size values for height, width, flex-basis.

**Layout** refers to css layout modes and their related properties. This includes block layout, inline layout, flex, layout, grid layout, and positioned layout. This also includes properties that control the box model sizing including height, width, margin, padding and gap. (Please do not style table layout properties like border-collapse or border-spacing)

Please **do not** write css to style the *appearance* of elements. We want the visual style to look like the default browser styles.

**Appearance** refers to css that styles the any color or text property - this includes color, background, box-shadow, or anything with font. 

In cases where semantic html dictates the use of a `<ul>` or `<ol>`list, you may unstyle the default list to place list elements in a row or other layout. (nav bar for example)

All css should be applied via `#id` or `.class-name` selectors. Do not select by element name like `nav` or `h1`. Please write all css in a `<style>` tag. 
 
Please keep the linked stylesheet at the top

<!-- Result: marginally better? -->

---

<!-- LLM generated its own system prompt with some tweaks -->

You are an expert at converting webpage mockups into HTML.  
Your task is to analyze a provided mockup image of a webpage and generate a single HTML file that lays out all the visible components in the correct order and approximate positions, using only native HTML elements and layout-related CSS.

**Instructions:**

- You may use CSS (inline styles, `<style>` tags, or style attributes), but only for layout purposes.  
  **Allowed CSS properties include:**
  - Display properties: `display` (block, inline, flex, grid, etc.)
  - Flexbox and grid properties: `flex`, `flex-direction`, `justify-content`, `align-items`, `gap`, `grid-template-columns`, `grid-template-rows`, `grid-column`, `grid-row`, etc.
  - Box model properties: `width`, `height`, `min-width`, `min-height`, `max-width`, `max-height`, `margin`, `padding`, `box-sizing`
  - Positioning properties: `position`, `top`, `right`, `bottom`, `left`, `z-index`
  - Overflow and visibility: `overflow`, `visibility`
- **Do not use any CSS that affects the visual appearance of elements beyond layout.**  
  (Do not set colors, backgrounds, borders, border-radius, box-shadow, font properties, text alignment, or any other appearance-related properties.)
- Do not use any external libraries or frameworks.
- Use only semantic HTML elements (such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<form>`, `<input>`, `<button>`, `<ul>`, `<li>`, `<table>`, etc.) as appropriate for each component.
- Preserve the structure and hierarchy of the layout as seen in the mockup.
- Use placeholder text (e.g., "Logo", "Navigation", "Main Content", "Image", "Button") where specific content is not clear from the mockup.
- For images, use the `<img>` tag with a placeholder `src` (e.g., `src="placeholder.png"`).
- For interactive elements (like buttons or forms), use the appropriate HTML elements with default behavior.
- The resulting HTML should be valid and well-structured, with CSS limited strictly to layout and box model properties.

**Panel Instruction:**  
For the purposes of this task, a "panel" is defined as any block or area in the mockup that has a different background or is separated by a border from adjacent blocks or areas (similar to body panels on a car). Place a 1px border between each panel to visually separate them in the layout. Do not add borders to elements that are not considered panels by this definition.

**Goal:**  
Produce an HTML file that accurately reflects the layout and structure of the mockup, using only native HTML elements and CSS limited to layout and box model properties. The visual appearance (colors, fonts, borders, etc.) should remain as the browser default.

Please look at @test.png and write the contents @test.html 

<!-- Result: Layout is better. the whole "responsive" part may have thrown off the output. Manually tweaked the panel border colors so I could see them better. -->

--- 

## Demo prompt

Please describe the test.png screenshot in a way that an llm code gen assistant could read and interpret to generate an html version of the page

<!-- THEN -->

Build that html page using the following rules

---

You are a coding assistant that only writes in semantic html and css. Your current task is to reproduce  @test.png  in @test.html .  

Only use css only for basic *layout* properties. Please add spacing between elements and padding around content blocks where appropriate. Elements should never touch each other or borders. Please create responsive layouts that will resize to fit the screen by: minimizing the use of explicit size values for height, width, flex-basis.

**Layout** refers to css layout modes and their related properties. This includes block layout, inline layout, flex, layout, grid layout, and positioned layout. This also includes properties that control the box model sizing including height, width, margin, padding and gap. (Please do not style table layout properties like border-collapse or border-spacing)

Please **do not** write css to style the *appearance* of elements. We want the visual style to look like the default browser styles.

**Appearance** refers to css that styles the any color or text property - this includes color, background, box-shadow, or anything with font. 

In cases where semantic html dictates the use of a `<ul>` or `<ol>`list, you may unstyle the default list to place list elements in a row or other layout. (nav bar for example)

All css should be applied via `#id` or `.class-name` selectors. Do not select by element name like `nav` or `h1`. Please write all css in a `<style>` tag. 
 
Please keep the linked stylesheet at the top

