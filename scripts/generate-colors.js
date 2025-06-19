const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const grays = ["slate", "gray", "zinc", "neutral", "stone"];

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const chromaX = [-1, -0.8, -0.6, -0.4, -0.2, 0, -0.2, -0.4, -0.6, -0.8, -1];
const hueX = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1];

function generateColorCSS() {
  let css = "@theme {\n";

  colors.forEach((color) => {
    shades.forEach((shade, index) => {
      css += `  --color-${color}-${shade}: oklch(from var(--${color}) var(--l-${shade}) calc((var(--c-x) * ${chromaX[index]} / 2000) + c) calc((var(--h-x) * ${hueX[index]}) + h));\n`;
    });
    css += "\n";
  });

  grays.forEach((gray) => {
    shades.forEach((shade, index) => {
      css += `  --color-${gray}-${shade}: oklch(from var(--${gray}) var(--l-${shade}) c h);\n`;
    });
    css += "\n";
  });

  css += "}\n";
  return css;
}

// Output the generated CSS
console.log(generateColorCSS());
