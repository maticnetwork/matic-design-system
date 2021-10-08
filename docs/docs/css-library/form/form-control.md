# Form Control
The form control classes take care of the states and sizes of the input elements like `<input />` and `<textarea>`

## Input Element
### Size variants
```html
<input class="input input-sm" type="text" placeholder="Small input element" />
<input class="input" type="text" placeholder="Default input element" />
<input class="input input-lg" type="text" placeholder="Large input element" />
```

<div class="demo-element-container">
    <input class="input input-sm" type="text" placeholder="Small input element" />
    <input class="input" type="text" placeholder="Default input element" />
    <input class="input input-lg" type="text" placeholder="Large input element" />
</div>

### Disabled state
```html
<input class="input" type="text" placeholder="Disabled input element" disabled />
```

<input class="input" type="text" placeholder="Disabled input element" disabled />

### Error state
```html
<label for="demo-input" class="label-bg">Email address:</label>
<input class="input error" type="text" id="demo-input" value="john@matic"/>
```

<label for="demo-input" class="label-bg">Email address:</label>
<input class="input error" type="text" id="demo-input" value="john@matic"/>

<br />

:::note
The `.error` class has to be applied to the input element in case of an error.
:::

## Textarea
Textarea elements also take the same classes as input elements.

### Size variants

```html
<textarea class="input input-sm" placeholder="Small textarea element"></textarea>
<textarea class="input" placeholder="Default textarea element"></textarea>
<textarea class="input input-lg" placeholder="Large textarea element"></textarea>
```

<div class="demo-element-container">
    <textarea class="input input-sm" placeholder="Small textarea element"></textarea>
    <textarea class="input" placeholder="Default textarea element"></textarea>
    <textarea class="input input-lg" placeholder="Large textarea element"></textarea>
</div>

<br />

:::note
In `textarea` size variants, the font-size and the padding of the element changes. The height of the element remains the same. 
:::

### Disabled state
```html
<textarea class="input" placeholder="Disabled textarea element" disabled></textarea>
```
<textarea class="input" placeholder="Disabled textarea element" disabled></textarea>

### Error State 
```html
<textarea class="input error" placeholder="Error state"></textarea>
```

<textarea class="input error" placeholder="Error state"></textarea>