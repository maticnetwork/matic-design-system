# Typography

Typography includes a set of typographic elements that can be used to build a more consistent and readable page. Documentation for headlines, body, labels, display, code and scss mixins.

<!-- .pm classes are used with p and h1-h6 to override the margin property set by docusaurus' stylesheet and bootstrap -->

## Headlines

`<h1>` - `<h6>` are given a given a default font-settings, including the font-size, font-weight, line-height and letter-spacing.

```html
<h1>Headline 1</h1>
<h2>Headline 2</h2>
<h3>Headline 3</h3>
<h4>Headline 4</h4>
<h5>Headline 5</h5>
<h6>Headline 6</h6>
```

<div class="demo-element-container">
  <h1 class="pm">Headline 1</h1>
  <h2 class="pm">Headline 2</h2>
  <h3 class="pm">Headline 3</h3>
  <h4 class="pm">Headline 4</h4>
  <h5 class="pm">Headline 5</h5>
  <h6 class="pm">Headline 6</h6>
</div>

<br />

Additionally, you can use the `.headline-` classes to when you want the headline styles but cannot use the `<h1>`-`<h6>` tags.

```html
<p class="headline-1">Headline 1</p>
<p class="headline-2">Headline 2</p>
<p class="headline-3">Headline 3</p>
<p class="headline-4">Headline 4</p>
<p class="headline-5">Headline 5</p>
<p class="headline-6">Headline 6</p>
```

<div class="demo-element-container">
  <p class="pm headline-1">Headline 1</p>
  <p class="pm headline-2">Headline 2</p>
  <p class="pm headline-3">Headline 3</p>
  <p class="pm headline-4">Headline 4</p>
  <p class="pm headline-5">Headline 5</p>
  <p class="pm headline-6">Headline 6</p>
</div>

## Capital

Capital classes can be used when there is a need to dipslay all caps text.
There are 4 variants: <span class="var">.cap-xs</span>, <span class="var">.cap-sm</span>, <span class="var">.cap-bs</span> and <span class="var">.cap-lg</span>.

```html
<p class="cap-xs">Capital extra small</p>
<p class="cap-sm">Capital small</p>
<p class="cap-bs">Capital base</p>
<p class="cap-lg">Capital large</p>
```

<div class="demo-element-container">
  <p class="cap-xs">Capital extra small</p>
  <p class="cap-sm">Capital small</p>
  <p class="cap-bs">Capital base</p>
  <p class="cap-lg">Capital large</p>
</div>

## Labels

There are 4 variants: <span class="var">.label-xs</span>, <span class="var">.label-sm</span>, <span class="var">.label-bs</span> and <span class="var">.label-lg</span>.

```html
<p class="label-xs">Label extra small</p>
<p class="label-sm">Label small</p>
<p class="label-bs">Label base</p>
<p class="label-lg">Label large</p>
```

<div class="demo-element-container">
  <p class="label-xs">Label extra small</p>
  <p class="label-sm">Label small</p>
  <p class="label-bs">Label base</p>
  <p class="label-lg">Label large</p>
</div>

## Display

Display classes can be used to make the heading stand out form the rest of the headlines. These are slightly larger than the default headlines.

```html
<h1 class="display-1">Display 1</h1>
<h2 class="display-2">Display 2</h2>
```

<p class="pm display-1">Display 1</p>
<p class="pm display-2">Display 2</p>

## Body

There are 4 different font-sizes for the body text. Using body text classes ensures that font-sizes are consistent across the site.

```html
<p class="body-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
  a ante.
</p>

<p class="body-sm">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
  a ante.
</p>

<p class="body-bs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
  a ante.
</p>

<p class="body-lg">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
  a ante.
</p>
```

<p class="pm body-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="pm body-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="pm body-bs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<p class="pm body-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

<!-- ## Code
Code classes can be used to apply a consistent styling to code blocks.

```html
<pre class="code-xs">code extra small</pre>
<pre class="code-sm">code small</pre>
<pre class="code-bg">code base</pre>
<pre class="code-lg">code large</pre>
```

<pre class="code-xs">code extra small</pre>
<pre class="code-sm">code small</pre>
<pre class="code-bg">code base</pre>
<pre class="code-lg">code large</pre> -->

<!-- font-family variable -->

## SCSS settings

Font settings can be customsed if you are using the source sass/scss files. All the settings can be found in the `_variables.scss` file. The typography of the PolygonMesh, is based on the same default settings.

### Font-family

The font-family can be changed by changing the `$font-family-base` and `$font-family-code` variable. The latter will be used by the code blocks.

```scss
$font-family-base: "Manrope", sans-serif;
$font-family-code: "Courier Prime", monospace;
```

### Font Weights

The font weights too are customizable. You will find them in a sass map in the `_variables.scss` file. The default font weights are:

```scss
$weights: (
  "extra-light": 200,
  "light": 300,
  "normal": 400,
  "medium": 500,
  "semibold": 600,
  "bold": 700,
  "extra-bold": 800,
);
```

### Font Sizes

Additional font-sizes can be added to the following map. The default font sizes are:

```scss
$font-sizes: (
    "xs": 0.75rem,    // 12px
    "sm": 0.875rem,   // 14px
    "bs": 1rem,       // 16px
    "lg": 1.125rem,   // 18px
    "xl": 1.25rem,    // 20px
    "2xl": 1.375rem,  // 22px
    "3xl": 1.5625rem, // 25px
    "4xl": 1.75rem,   // 28px
    "5xl": 2rem,      // 32px
    "6xl": 2.25rem,   // 36px
    "7xl": 2.5rem,    // 40px
    "8xl": 2.8125rem, // 45px
    "9xl": 3.75rem    // 60px
);
```

### Line Heights

We have a bunch of pre-defined line-heights according to our design guidelines. You can edit them in the `_variables.scss` file. The default line-heights are:

```scss
$line-heights: (
  "leading-3": 12px,
  "leading-4": 16px,
  "leading-5": 20px,
  "leading-6": 24px,
  "leading-7": 28px,
  "leading-8": 32px,
  "leading-9": 36px,
  "leading-10": 40px,
  "leading-11": 48px,
  "leading-none": 100%,
  "leading-tight": 125%,
  "leading-snug": 137.5%,
  "leading-normal": 150%,
  "leading-relaxed": 162%,
  "leading-loose": 200%,
);
```

### Letter Spacing

Letter spacing can be changed by changing the `$letter-spacings` variable. The default letter spacing is:

```scss
$letter-spacings: (
  "2": 2px,
  "3": 3px,
  "4": 4px,
  "5": 5px,
);
```

### Font Settings

`font-settings` mixin allows you to pass the settings (font-family, font-weight, font-size, line-height, letter-spacing) and get the css output.

```scss
@mixin font-settings(
  $size,
  $weight,
  $line-height,
  $letter-spacing,
) {...}
```

<br />

**Example**

```scss
// this is the font-setting for headline-2
.headline-2 {
  @include font-settings("5xl", "bold", "leading-10");
}
```

```css
/* The font-settings mixin will return the following css */
.headline-2 {
  font-size: 32px; /* 5xl */
  font-weight: 700; /* bold */
  line-height: 40px; /* leading-10 */
  letter-spacing: normal; /* takes the default value since no value is passed. */
}
```

<!-- Write for code mixing after discussion -->
