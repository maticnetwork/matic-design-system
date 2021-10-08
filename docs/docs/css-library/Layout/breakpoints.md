# Breakpoints

Media queries allows the developer to conditionally apply the styles to the element based on the screensize. **Breakpoints** are the screen widths that determines at what size which styles should be applied.

## Available breakpoints

| Breakpoint | Name        | Dimensions |
| ---------- | ----------- | ---------- |
| **sm**     | Small       | ≥ 576px    |
| **md**     | Medium      | ≥ 768px    |
| **lg**     | Large       | ≥ 992px    |
| **xl**     | Extra large | ≥ 1200px  |

```scss
$breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
);
```
These breakpoints can be customized in scss. You'll find them in the <span class="var">_variables.scss</span> file. 
## Media Queries

We have a set of media queries made for the above breakpoints. The syntax is as follows:

```scss
@include media-breakpoint-{value}({breakpoint}) {
    ...
}
```

Where _breakpoint_ is one of:
- <span class="var">sm</span>
- <span class="var">md</span>
- <span class="var">lg</span>
- <span class="var">xl</span> 

and _value_ is either 
- <span class="var">up</span>
- <span class="var">down</span>

### Min-width

PolygonMesh is built mobile first, which means we use `min-width` for the [grid system](./grid-column) and other PolygonMesh classes.
If you are taking mobile first approach in your project, you can use the

```scss
@include media-breakpoint-up(sm) {...}
@include media-breakpoint-up(md) {...}
@include media-breakpoint-up(lg) {...}
@include media-breakpoint-up(xl) {...}

// This compiles to
// @media (min-width: 576px) {...}
// @media (min-width: 768px) {...}
// @media (min-width: 992px) {...}
// @media (min-width: 1200px) {...}
```

### Usage

```scss
.my-element {
  background-color: white;
}

@include media-breakpoint-up(lg) {
  .my-element {
    background-color: black;
  }
}

// This will change the background color to black on lg and above screen sizes
```

The above mixins compiles to the following CSS code:

```css
.my-element {
  background-color: white;
}

@media (min-width: 576px) {
  .my-element {
    background-color: black;
  }
}
```

### Max-width

If you are taking desktop first approach in your project or want to use `max-width` conditions, you can use the following mixins:

```scss
@include media-breakpoint-down(sm) {...}
@include media-breakpoint-down(md) {...}
@include media-breakpoint-down(lg) {...}
@include media-breakpoint-down(xl) {...}

// This compiles to
// @media (max-width: 575.98px) {...}
// @media (max-width: 767.98px) {...}
// @media (max-width: 991.98px) {...}
// @media (max-width: 1199.98px) {...}
```

### Usage

```scss
.my-element {
  background-color: white;
}

@include media-breakpoint-down(md) {
  .my-element {
    background-color: black;
  }
}

// This will change the background color to black on md and below screen sizes
```

The above code compiles to

```css
.my-element {
  background-color: white;
}

@media (max-width: 767.98px) {
  .my-element {
    background-color: black;
  }
}
```