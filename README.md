# Fluent.css

**An attempt at an LLM-first design system**

...

## Usage

Fluent.css is based on the tailwind syntax, and integrates as a tailwind component library. However, *Tailwind is not a required dependency*. This library can be used as a standalone with zero dependencies.

### Components

Fluent.css styles all default html elements into Microsoft Fluent styled components. This includes
- Button - `<button/>`, `<a class="btn"/>`, `<select class="btn"/>`
- Button Group - `<div>
- Input - `<input />`, `<textarea/>`, `<select/>`, `<div class="input"><i class="icon">🔍</i><input/><button>Submit</button></div>`
- Accordion - `<details/>` & `<summary/>` together (`<details class="marker-end"/>` will place the arrow marker on the right side)
- 

### Component Utilities
These class sets apply

## Development

...

---

# TODOs

## Transition to Fluent

## Bugs & Improvements

- use padding and absolute positions for the marker in `details summary` instead of flex? Or use `float:right;`?
- firefox & safari support? (for input pseudo elements)
- intent - info, brand, success, warning, danger
- icons for input types - search, date, numeric
- create docs page with tailwind
- icon support

## Icons?

- icons with svg use external
- with [fluent icons font and css file](https://github.com/microsoft/fluentui-system-icons/blob/cd860cfdb9c60f6b731f6164b21e04909b23178e/fonts/FluentSystemIcons-Resizable.css)?
- Icons in input: wrapper element that z-indexes input at the back and a before and after element for icons and buttons
- with web-component

## Naming `@component`s

- Naming conventions from tailwind component libraries
  - tailwind v3 components (which i can find no record of)
  - [Daisy UI](https://daisyui.com/)
  - Fluent: [React](https://react.fluentui.dev/), [General](https://fluent2.microsoft.design/), [Web Component](https://web-components.fluentui.dev/), [Theme](https://react.fluentui.dev/iframe.html?viewMode=docs&id=theme-theme-designer--docs)
- Format - .component .component-variant .utility-variant
  - .size-sm, .size-md, .size-lg (.size-xl, .size-xs)
  - .type-primary, .type-outline, .type-subtle, .type-transparent (.type-ghost)
  - .intent-info, .intent-brand, .intent-success, .intent-warning, .intent-danger
  - .selected, .disabled, .icon-only
  - .tab, .tabs, .tabs-vertical
  - .btn, button, .btn-group, a.btn, select.btn, button.link (split-button, menu-button?)
  - .input, input
  - checkbox
  - radio
  - input range - (aka slider)
  - .switch - input[type="checkbox"] (aka toggle)
  - .spinner - progress[indeterminate] (aka progress bar)
  - .dialog - dialog - .dialog-dismiss-btn (aka modal)
  - .select - select select.btn select.input (aka dropdown)
  - details, summary (aka accordion) .marker-end
  - [popover] (.tooltip) .popover-position
  - .menu-group (.menu)
  - table .table-interactive, tr.table-row-interactive, th.table-cell-interactive tr.selected (aka data grid)
  - a .link (aka link) a.intent-info
  - .icon, .icon-emoji
  - NEXT
    - .field
    - .badge
    - .breadcrumbs .divider
    - .avatar?
    - .message (aka message bar, notice)
    - .skeleton
    - .dialog-drawer
    - table interactive


