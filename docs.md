# Mirai.css

## Core

### Typography

#### Font Sizes
- `--mri-font-size-1` to `--mri-font-size-7`: Font sizes (e.g., 40px, 28px, 20px, 16px, 14px, 12px, 10px)- 1 is largest, 7 is smallest

```html
<span style="font-size: var(--mri-font-size-1);">Font Size 1 - 40px</span>
<span style="font-size: var(--mri-font-size-2);">Font Size 2 - 28px</span>
<span style="font-size: var(--mri-font-size-3);">Font Size 3 - 20px</span>
<span style="font-size: var(--mri-font-size-4);">Font Size 4 - 16px</span>
<span style="font-size: var(--mri-font-size-5);">Font Size 5 - 14px</span>
<span style="font-size: var(--mri-font-size-6);">Font Size 6 - 12px</span>
<span style="font-size: var(--mri-font-size-7);">Font Size 7 - 10px</span>
```

#### Font Families
```html
<span style="font-family: var(--mri-font-family-sans);">Font Family Sans</span>
<span style="font-family: var(--mri-font-family-mono);">Font Family Mono</span>
```

#### Font Weights
```html
<span style="font-weight: var(--mri-font-weight-regular);">Font Weight Regular</span>
<span style="font-weight: var(--mri-font-weight-bold);">Font Weight Bold</span>
```

### Color

#### Text Colors
- `--mri-color-text-1` to `--mri-color-text-4`: Text colors for different emphasis - 1 is most intense, 4 is least intense

```html
<p style="color: var(--mri-color-text-1);">Text 1</p>
<p style="color: var(--mri-color-text-2);">Text 2</p>
<p style="color: var(--mri-color-text-3);">Text 3</p>
<p style="color: var(--mri-color-text-4);">Text 4</p>
```

#### Background Colors
- `--mri-color-background-1` to `--mri-color-background-4`: Background colors for different surfaces
  - 1 is the background for primary panels
  - 2 is the background for inputs and controls inside a primary panel
  - 3 is the darker page background
  - 4 is the darkest, not often used

```html
<div style="background-color: var(--mri-color-background-1);">Background 1</div>
<div style="background-color: var(--mri-color-background-2);">Background 2</div>
<div style="background-color: var(--mri-color-background-3);">Background 3</div>
<div style="background-color: var(--mri-color-background-4);">Background 4</div>
```

#### Border Colors
- `--mri-color-border-1`, `--mri-color-border-2`: Border colors - border-1 is a divider, border-2 is the same as background-3

```html
<div style="border: 1px solid var(--mri-color-border-1);">Border 1</div>
<div style="border: 1px solid var(--mri-color-border-2);">Border 2</div>
```

### Layout

#### Border Radius
```html
<div style="border-radius: 0">Radius None - 0px</div>
<div style="border-radius: var(--mri-border-radius-small);">Radius Small - 4px</div>
<div style="border-radius: var(--mri-border-radius-medium);">Radius Medium - 8px</div>
<div style="border-radius: var(--mri-border-radius-large);">Radius Large - 12px</div>
<div style="border-radius: var(--mri-border-radius-xlarge);">Radius XLarge - 16px</div>
<div style="border-radius: var(--mri-border-radius-circular);">Radius Circular - 999px</div>
```

#### Shadows
- `--mri-shadow-2` is the lowest visual z-index, and `--mri-shadow-64` is the highest visual z-index

```html
<div style="box-shadow: var(--mri-shadow-2);">Shadow 2</div>
<div style="box-shadow: var(--mri-shadow-4);">Shadow 4</div>
<div style="box-shadow: var(--mri-shadow-8);">Shadow 8</div>
<div style="box-shadow: var(--mri-shadow-16);">Shadow 16</div>
<div style="box-shadow: var(--mri-shadow-28);">Shadow 28</div>
<div style="box-shadow: var(--mri-shadow-64);">Shadow 64</div>
```

## Forms

### Button

#### Appearances
```html
<button class="mri-appearance-primary">Primary</button>
<button class="mri-appearance-outline">Outline</button>
<button class="mri-appearance-subtle">Subtle</button>
<button class="mri-appearance-transparent">Transparent</button>
```

#### Sizes
```html
<button class="mri-size-small">Small</button>
<button class="mri-size-medium">Medium</button>
<button class="mri-size-large">Large</button>
```

#### Shapes
```html
<button class="mri-shape-square">Square</button>
<button class="mri-shape-rounded">Rounded</button>
<button class="mri-shape-circular">Circular</button>
```

#### States
```html
<button>Default</button>
<button disabled>Disabled</button>
<button class="mri-active">Active</button>
<button class="mri-icon-only">X</button>
```

#### Elements
```html
<input type="reset" value="Input Reset" />
<input type="submit" value="Input Submit" />
<a href="#" class="mri-button">Anchor Button</a>
<select class="mri-button">
  <option value="">Select Button</option>
</select>
```

### Control Group
An element with the `mri-control-group` class renders multiple `button`s and `input`s as one unit. 
A modifier class (like `mri-size-large`) placed on the control group will apply to all its children.

```html
<div class="mri-control-group">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

#### Example with size, shape, active, and icon-only
```html
<div class="mri-control-group mri-size-small mri-shape-square">
  <button>Size Small</button>
  <button>Shape Square</button>
  <button class="mri-active">Selected</button>
  <button class="mri-icon-only">•••</button>
</div>
```

#### Standalone Form
```html
<form class="mri-control-group mri-shape-rounded">
  <input type="email" placeholder="Your email" />
  <button>Subscribe</button>
</form>
```

### Input

```html
<input type="text" placeholder="Default" />
<input type="text" placeholder="Disabled" disabled />
<input type="text" placeholder="Outline" class="mri-appearance-outline" />
```

#### Sizes
```html
<input type="text" placeholder="Small" class="mri-size-small" />
<input type="text" placeholder="Medium" class="mri-size-medium" />
<input type="text" placeholder="Large" class="mri-size-large" />
```

#### Shapes
```html
<input type="text" placeholder="Square" class="mri-shape-square" />
<input type="text" placeholder="Rounded" class="mri-shape-rounded" />
<input type="text" placeholder="Circular" class="mri-shape-circular" />
```

#### Non-Text Types
```html
<input type="number" placeholder="000" />
<input type="color" />
<input type="date" />
```

### Select
```html
<select>
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```

### Textarea
```html
<textarea placeholder="Textarea"></textarea>
```

### Radio

#### States
```html
<label>
  <input type="radio" name="radio" value="1" checked />
  Checked
</label>
<label>
  <input type="radio" name="radio" value="2" />
  Unchecked
</label>
```

#### Sizes
```html
<label class="mri-size-large">
  <input type="radio" name="radio2" value="1" />
  Large
</label>
<label class="mri-size-medium">
  <input type="radio" name="radio2" value="2" />
  Medium
</label>
<label class="mri-size-small">
  <input type="radio" name="radio2" value="3" />
  Small
</label>
```

### Checkbox

#### States
```html
<label>
  <input type="checkbox" name="checkbox1" checked />
  Checked
</label>
<label>
  <input type="checkbox" name="checkbox3" />
  Unchecked
</label>
```

#### Sizes
```html
<label class="mri-size-large">
  <input type="checkbox" name="checkbox-large" />
  Large
</label>
<label class="mri-size-medium">
  <input type="checkbox" name="checkbox-medium" />
  Medium
</label>
<label class="mri-size-small">
  <input type="checkbox" name="checkbox-small" />
  Small
</label>
```

### Switch
For the "switch" variant of a standalone checkbox, add the `mri-switch` class

#### States
```html
<label>
  <input type="checkbox" class="mri-switch" checked />
  Checked
</label>
<label>
  <input type="checkbox" class="mri-switch" />
  Unchecked
</label>
```

#### Sizes
```html
<label>
  <input type="checkbox" class="mri-switch mri-size-small" />
  Small
</label>
<label>
  <input type="checkbox" class="mri-switch mri-size-medium" />
  Medium
</label>
<label>
  <input type="checkbox" class="mri-switch mri-size-large" />
  Large
</label>
```

### Slider
```html
<input type="range" min="0" max="100" value="50" />
```

### Progress
```html
<progress value="33" max="100"></progress>
<progress indeterminate></progress>
```

#### Spinner
The `mri-spinner` variation displays a round spinning loader instead of a loading par
```html
<progress class="mri-spinner" indeterminate></progress>
```

## Overlay

### Dialog
The native `dialog` element will style child `header`, `main`, and `footer` elements with layout properties

A button with `mri-dialog-close` button will appear in the top right of the dialog

```html
<button onclick="document.getElementById('sample-dialog').showModal()">Open Dialog</button>

<dialog id="sample-dialog" closedby="any">
  <header>
    <h3>Dialog Title</h3>
    <span>An example dialog</span>
  </header>
  <main>
    <p>This is a sample dialog window with some content.</p>
  </main>
  <footer>
    <!-- the mri-dialog-close button will appear in the top right  -->
    <button class="mri-dialog-close mri-appearance-transparent mri-icon-only">X</button>
    <button class="mri-appearance-subtle">Cancel</button>
    <button class="mri-appearance-primary">Primary</button>
  </footer>
</dialog>
```

### Popover
Use the native html `popover` attribute and API to create a popover

```html
<button popovertarget="popover-example">Click for popover</button>
<div id="popover-example" popover>
  <h3>Popover Title</h3>
  <p>This is a Popover using the new popover API</p>
</div>
```

### Menu & Split Button
The `mri-menu` displays a vertically stacked menu of buttons. This should be used in a `popover`, and is commonly used with a "split button": a Control group that combines a main button with a icon-only overflow button that opens a popover menu

```html
<div class="mri-control-group">
  <button class="mri-appearance-primary mri-shape-rounded">Split Button</button>
  <button class="mri-appearance-primary mri-icon-only mri-shape-rounded" popovertarget="menu-example">•••</button>
</div>
<div class="mri-menu" id="menu-example" popover>
  <button>Add</button>
  <button>Edit</button>
  <button>Duplicate</button>
  <hr />
  <button class="mri-intent-primary">Delete</button>
</div>
```

## Other

### Accordion
The "accordion" element is the native `details` and `summary` html elements

```html
<details>
  <summary>Accordion Item 1</summary>
  <p>Content for item 1</p>
</details>
<details>
  <summary>Accordion Item 2</summary>
  <p>Content for item 2</p>
</details>
<details open>
  <summary>Accordion Item Open</summary>
  <p>Content for open item</p>
</details>
```

### Tabs
The mirai tabs component consists of 2 parts: tab styles, and a css `:checked` hack to create tab functionality

#### Tabs style


#### Tabs Functionality
*How it works:*
An `input` `type="radio"` with `id="tab-N"` sits inside its `label` with `for="tab-N"` and `aria-controls="panel-N"`. When that `input` is `checked`, the corresponding element with `id="panel=N` ***anywhere in the dom*** will be displayed. 

The css-only tabs navigation uses `input[type="radio"]:checked` selector to  corresponding tab panel.

There are 20 available tab/panel ids hard-coded into the css file in the format `tab-<number>` and `panel-<number>` like: `tab-1`, `tab-2`, ... `tab-20` and `panel-1`, `panel-2`, ... `panel-20`



The `label` must have the `aria-controls`
The input is visually hidden with `display:none;`, but the `label` still interacts with this `input`.
When an `input` is `checked`

```html
<nav role="tablist">
  <label role="tab" aria-controls="panel-1" for="tab-1">
    <input type="radio" name="tab-group-1" id="tab-1" checked />
    Tab 1
  </label>
  <label role="tab" aria-controls="panel-2" for="tab-2">
    <input type="radio" name="tab-group-1" id="tab-2" />
    Tab 2
  </label>
  <label role="tab" aria-controls="panel-3" for="tab-3">
    <input type="radio" name="tab-group-1" id="tab-3" />
    Tab 3
  </label>
</nav>
<section id="panel-1" role="tabpanel" aria-labelledby="tab-1">
  <h3>First Tab Content</h3>
</section>
<section id="panel-2" role="tabpanel" aria-labelledby="tab-2">
  <h3>Second Tab Content</h3>
</section>
<section id="panel-3" role="tabpanel" aria-labelledby="tab-3">
  <h3>Third Tab Content</h3>
</section>
```

### Table
```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 2, Cell 3</td>
    </tr>
    <tr>
      <td>Row 3, Cell 1</td>
      <td>Row 3, Cell 2</td>
      <td>Row 3, Cell 3</td>
    </tr>
  </tbody>
</table>
```

### HTML Elements
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>. Here's some <mark>highlighted text</mark> and <del>deleted text</del>.</p>
<blockquote>This is a blockquote.</blockquote>
<p>Here's some <code>inline code</code> and a <kbd>keyboard input</kbd> example.</p>
<pre><code>// This is a code block
function example() {
    console.log("Hello, World!");
}</code></pre>
<hr />
<p>Here's a <a href="#">link</a> and an <abbr title="World Health Organization">WHO</abbr> abbreviation.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
</ol>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

