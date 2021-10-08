# Corners
The corner (`.rounded`) classes allows you to easily add rounded corners to any element. The syntax for the `.rounded` class is as follows:

```md
.rounded <!-- for regular: 8px-->
.rounded-{$base}
```

where **$base** is one of the following: <span class="var">sm</span>, <span class="var">md</span>, <span class="var">lg</span>, <span class="var">xl</span>, <span class="var">2xl</span> and <span class="var">full</span>


**Example**

```html
<div class="rounded-sm p-4 bg-primary-500">Rounded Small</div>
<div class="rounded p-4 bg-primary-500">Rounded Regular</div>
<div class="rounded-md p-4 bg-primary-500">Rounded Medium</div>
<div class="rounded-lg p-4 bg-primary-500">Rounded Large</div>
<div class="rounded-xl p-4 bg-primary-500">Rounded xl</div>
<div class="rounded-2xl p-4 bg-primary-500">Rounded 2xl</div>
<div class="rounded-full p-4 bg-primary-500">Rounded Full</div>
```

<div class="demo-element-container flex">
    <div class="rounded-sm p-4 bg-primary-500">Rounded Small</div>
    <div class="rounded p-4 bg-primary-500">Rounded Regular</div>
    <div class="rounded-md p-4 bg-primary-500">Rounded Medium</div>
    <div class="rounded-lg p-4 bg-primary-500">Rounded Large</div>
    <div class="rounded-xl p-4 bg-primary-500">Rounded xl</div>
    <div class="rounded-2xl p-4 bg-primary-500">Rounded 2xl</div>
    <div class="rounded-full p-4 bg-primary-500">Rounded Full</div>
</div>

## scss

The corner mixin is availabe in the `_variables.scss` file. 

```scss
.block {
    @include corner("md");
}
```

The above code will generate the following CSS:
```css
.block {
    border-radius: 12px;
}
```

The following are the default values for the corners and can be overridden by passing new values. The map is available in the `_variables.scss` file.

```scss
$corners: (
  "sm": 4px,
  "rg": 8px,
  "md": 12px,
  "lg": 16px,
  "xl": 20px,
  "2xl": 24px,
  "full": 9999px,
);
```