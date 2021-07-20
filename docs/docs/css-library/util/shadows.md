# Shadows
The shadow classes allows you to add box-shadow to any element. The syntax is as follows:

```md
.shadow <!-- for regular: rg -->
.shadow-{$base}
```

where **$base** is one of the following: <span class="var">sm</span>, <span class="var">md</span>, <span class="var">lg</span>, <span class="var">xl</span> and <span class="var">2xl</span>

**Example**

```html
<div class="rounded p-4 bg-gray-300 shadow-sm">shadow-sm</div>
<div class="rounded p-4 bg-gray-300 shadow">shadow</div>
<div class="rounded p-4 bg-gray-300 shadow-md">shadow-md</div>
<div class="rounded p-4 bg-gray-300 shadow-lg">shadow-lg</div>
<div class="rounded p-4 bg-gray-300 shadow-xl">shadow-xl</div>
<div class="rounded p-4 bg-gray-300 shadow-2xl">shadow-2xl</div>
```

<div class="demo-element-container flex">
    <div class="rounded p-4 bg-gray-300 shadow-sm">shadow-sm</div>
    <div class="rounded p-4 bg-gray-300 shadow">shadow</div>
    <div class="rounded p-4 bg-gray-300 shadow-md">shadow-md</div>
    <div class="rounded p-4 bg-gray-300 shadow-lg">shadow-lg</div>
    <div class="rounded p-4 bg-gray-300 shadow-xl">shadow-xl</div>
    <div class="rounded p-4 bg-gray-300 shadow-2xl">shadow-2xl</div>
</div>

## scss

The shadow mixin is availabe in the `_variables.scss` file. 

```scss
.block {
    @include shadow("md");
}
```

The above code will generate the following CSS:
```css
.block {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
}
```

The following are the default values for the shadows and can be overridden by passing new values. The map is available in the `_variables.scss` file.

```scss
$shadows: (
  "sm": 0px 4px 2px rgba(0, 0, 0, 0.02),
  "rg": 0px 4px 8px rgba(0, 0, 0, 0.04),
  "md": 0px 2px 4px rgba(0, 0, 0, 0.08),
  "lg": (
    0px 4px 8px rgba(0, 0, 0, 0.03),
    0px 12px 8px rgba(0, 0, 0, 0.02),
  ),
  "xl": 0px 8px 24px rgba(0, 0, 0, 0.08),
  "2xl": 0px 12px 30px rgba(0, 0, 0, 0.12),
);
```