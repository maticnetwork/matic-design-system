# Button
PolygonMesh has a bunch of button classes that takes care of states, size variants and color variants.

**Examples**
<button class="btn primary">Primary</button>
<button class="btn secondary">Secondary</button>
<button class="btn success">Success</button>
<button class="btn warning">Warning</button>
<button class="btn error">Error</button> 
<button class="btn">Text button</button> 
<button disabled class="btn">Disabled button</button> 

## Color variants
The button classes can be used with `<a>`, `<button>` or `<input>` elements. Different browsers may render these elements differently.

```html
<button class="btn primary">Primary</button>
<button class="btn secondary">Secondary</button>
<button class="btn success">Success</button>
<button class="btn warning">Warning</button>
<button class="btn error">Error</button> 
<button class="btn">Text button</button> 
<button disabled class="btn">Disabled button</button> 
```

<button class="btn primary">Primary</button>
<button class="btn secondary">Secondary</button>
<button class="btn success">Success</button>
<button class="btn warning">Warning</button>
<button class="btn error">Error</button> 
<button class="btn">Text button</button> 
<button disabled class="btn">Disabled button</button> 

:::note
`.btn` class without additonal color or size class will render a text button (without any backgroud color).
:::

Any button with `disabled` attribute won't have any hover and focus state.

## Size variants
There are 3 different sizes for the buttons (other than default): `.sm` and `.lg`.

```html
<button class="btn primary sm">Button Small</button>
<button class="btn primary">Button Normal</button>
<button class="btn primary lg">Button Large</button>

<button class="btn secondary sm">Button Small</button>
<button class="btn secondary">Button Normal</button>
<button class="btn secondary lg">Button Large</button>
```

<button class="btn primary sm">Button Small</button>
<button class="btn primary">Button Normal</button>
<button class="btn primary lg">Button Large</button>
<br />
<button class="btn secondary sm">Button Small</button>
<button class="btn secondary">Button Normal</button>
<button class="btn secondary lg">Button Large</button>

:::info
Default size is medium. 
Default button variant is text-button.
:::