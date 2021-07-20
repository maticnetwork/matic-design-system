# Background
Background color classes can be used to set background color for an element.

The syntax for the class is as follows:
```md
.bg-{$color}-{$base}
```
where **$color** is one of the following: <span class="var">gray</span>, <span class="var">primary</span>, <span class="var">secondary</span>, <span class="var">success</span>, <span class="var">warning</span> and <span class="var">error</span>

and **$base** is one of the following: <span class="var">900</span>, <span class="var">800</span>, <span class="var">700</span>, <span class="var">600</span>, <span class="var">500</span>, <span class="var">400</span>, <span class="var">300</span>, <span class="var">200</span>, <span class="var">100</span>

## Base variants
```html
<div class="bg-primary-900 rounded-sm p-4">.bg-primary-900</div>
<div class="bg-primary-800 rounded-sm p-4">.bg-primary-800</div>
<div class="bg-primary-700 rounded-sm p-4">.bg-primary-700</div>
<div class="bg-primary-600 rounded-sm p-4">.bg-primary-600</div>
<div class="bg-primary-500 rounded-sm p-4">.bg-primary-500</div>
<div class="bg-primary-400 rounded-sm p-4">.bg-primary-400</div>
<div class="bg-primary-300 rounded-sm p-4">.bg-primary-300</div>
<div class="bg-primary-200 rounded-sm p-4">.bg-primary-200</div>
<div class="bg-primary-100 rounded-sm p-4">.bg-primary-100</div>
```

<div class="demo-element-container">
    <div class="bg-primary-900 rounded-sm p-4">.bg-primary-900</div>
    <div class="bg-primary-800 rounded-sm p-4">.bg-primary-800</div>
    <div class="bg-primary-700 rounded-sm p-4">.bg-primary-700</div>
    <div class="bg-primary-600 rounded-sm p-4">.bg-primary-600</div>
    <div class="bg-primary-500 rounded-sm p-4">.bg-primary-500</div>
    <div class="bg-primary-400 rounded-sm p-4">.bg-primary-400</div>
    <div class="bg-primary-300 rounded-sm p-4">.bg-primary-300</div>
    <div class="bg-primary-200 rounded-sm p-4">.bg-primary-200</div>
    <div class="bg-primary-100 rounded-sm p-4">.bg-primary-100</div>
</div>

<br />

:::note
You may have noticed some extra classes like `.rounded-sm` and `.p-4` in the above code. We will learn about those classes in the following sections.
:::

## Color variants
```html
<div class="bg-primary-500 rounded-sm p-4">.bg-primary-500</div>
<div class="bg-secondary-500 rounded-sm p-4">.bg-secondary-500</div>
<div class="bg-success-500 rounded-sm p-4">.bg-success-500</div>
<div class="bg-warning-500 rounded-sm p-4">.bg-warning-500</div>
<div class="bg-error-500 rounded-sm p-4">.bg-error-500</div>
<div class="bg-gray-500 rounded-sm p-4">.bg-gray-500</div>
```

<div class="demo-element-container">
    <div class="bg-primary-500 rounded-sm p-4">.bg-primary-500</div>
    <div class="bg-secondary-500 rounded-sm p-4">.bg-secondary-500</div>
    <div class="bg-success-500 rounded-sm p-4">.bg-success-500</div>
    <div class="bg-warning-500 rounded-sm p-4">.bg-warning-500</div>
    <div class="bg-error-500 rounded-sm p-4">.bg-error-500</div>
    <div class="bg-gray-500 rounded-sm p-4">.bg-gray-500</div>
</div>

## SCSS
If you are using the scss source files, you can use the mixins to get the colours. 

```scss
.para{
    @mixin set-bg("primary", "500");
    // other css rules
}
```

The above code will output the following css:
```css
.para{
    background-color: var(--primary-500); /*#8247e5*/
    /* other css rules */
}
```

:::note
The `set-bg` mixin will return background-color property with a CSS3 var as its value. These varialbes can be overriden or changed by the users. More about this in the [customize](../customize/theme.md) section.
:::