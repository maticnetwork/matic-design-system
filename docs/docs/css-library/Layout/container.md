# Container

Containers are the basic layout elements that usually contain the grid rows. Their basic funtionality is to contain the content within them.

The element with class `.container` will always be centered horizontally.

## Default container
The default container has a max-width of `1140px` which can be changed by setting the desired width to the `--container-width` css variable.

```html
<div class="container">
    <!-- content here -->
</div>
```

The max-width of the container can be set using the `--container-width` css variable.
```css
:root {
    --container-width: 1280px;
}
/* the above code overwrites the max-width of the container */
```

## Fluid Container
Use fluid container for full-screen container requirements.
It spans over the entire width of the screen and has a max-width of `100%`.


```html
<div class="container-fluid">
    <!-- content here -->
</div>
```