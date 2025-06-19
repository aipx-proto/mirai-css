![mirai.css cover art](./assets/Mirai-未来-css-Cover.svg)

# Mirai CSS • 未来

**An attempt at an LLM-first design system**

Mirai CSS is a lightweight, CSS-only design system inspired by Microsoft Fluent, built for rapid prototyping, clean default styles, and seamless integration with AI and LLM code generation. 

- **LLM-First:** Designed so its documentation and usage can be easily included in AI prompts or code generation contexts.
- **Smart Defaults:** Styles all standard HTML elements for a polished, accessible baseline—unstyled markup still looks great, and is easier for an LLM to use for code generation.
- **Zero JS, Pure CSS:** Leverages modern CSS features (currently Chromium-focused) to provide interactive components and utilities that previously required JavaScript.
- **Utility Classes & Variables:** Offers a minimal, consistent set of utility classes and CSS variables to style additional markup.
- **Component Coverage:** Includes buttons, inputs, dialogs, overlays, menus, tabs, and more—ready to use out of the box - in just css

[Sample Page](https://aipx-proto.github.io/mirai-css)

## Usage

**Download** the [`mirai.build.css`](./styles/mirai.build.css) stylesheet and include it manually

Or **link** the esm.sh version:
```html
  <link rel="stylesheet" href="https://esm.sh/gh/aipx-proto/mirai-css/styles/mirai.build.css?raw" />
```

**Fonts** - (working on it)

**LLM.txt instructions** are currently incomplete and bad, but you can download [`mirai.css.md`](./styles/mirai.css.md) to give it a go

## Development

A browser will render the `index.html` file from your filesystem. I prefer to run [`live-server`](https://www.npmjs.com/package/live-server) in my repo for live updates.

`npm run build` to run post css and create `mirai.build.css` which contains a merge of all the css files

---

# TODOs

## Bugs
- `.mri-icon-only` should apply to all children of groups...
- `button.mri-appearance-primary` doesn't work in `.mir-input-group`
- `select.mri-button` needs the arrow on the right
- add default flex size to radio checkbox spinner icon and other things that are a fixed size
- fix label > disabled in disabled.css
- default inline-flex for more things like `label:has(input[type=checkbox], input[type=radio])`
- use padding and absolute positions for the marker in `details summary` instead of flex? Or use `float:right;`? 

## Refactor
- create docs
- firefox support (for input pseudo elements)
- unify/simplify variable usage - delete appearance vars, they are different for each component applied
- transparent backgrounds? Maybe they would be better as they'd work in more random scenarios?

## Ambition

### Next
- intent: info, warning, error, success, brand
  - applies to anything? like a theme?
- simple icon set: dismiss, chevron, checkmark, search
- input placeholder: color, type="date"

### Done
- interaction vars
- size: small, medium, large - applies to text, buttons, controls. 
- shape: circular, square, rounded
- appearance: primary, outline, subtle
  - button: primary, outline, subtle, transparent
  - input: outline, underline, filled-darker, filled-lighter
- checkbox, radio, switch
- button 
- dialog element
- input elements
- slider
- anchor button
- accordion details element
- split button: button/input group - split button
- popover, tooltip, menu - with html popover and css anchor
- select button
- loading
  - spinner
  - progress bar
- tabs

## Examples
- field: label + input (and message?)
- dialog: simple vs header/main/footer...

## Icons?
- icons with svg use external
- with [fluent icons font and css file](https://github.com/microsoft/fluentui-system-icons/blob/cd860cfdb9c60f6b731f6164b21e04909b23178e/fonts/FluentSystemIcons-Resizable.css)?
- Icons in input: wrapper element that z-indexes input at the back and a before and after element for icons and buttons

