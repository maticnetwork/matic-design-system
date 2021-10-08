---
sidebar_position: 1
---

# Installation

The CSS Library is essentially a CSS file that you can include in your HTML. Currently, only the CSS version of the library is available. We are planning to publish the NPM package soon which will include the SCSS version too.

## Using CDN

To include CSS in your project, use jsDelivr, a free open source CDN. This is the quickest way, and currently the only way to include PolygonMesh in your project.

Copy the `<link>` tag below into the `<head>` of your HTML file before any other CSS files.

```html
<link
  href="https://cdn.jsdelivr.net/gh/maticnetwork/matic-design-system@css-master/style.css"
  rel="stylesheet"
  crossorigin="anonymous"
/>
```

## Responsive meta tag

PolygonMesh, like any other major CSS libraries, follows the **mobile first approach**. In order for this to work smoothly on all devices, you will have to add a `<meta>` tag inside `<head>` of your HTML file.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## Reset CSS

To override some of the default browser styles, we have reset some of the CSS properties. The **box-sizing** property is set to **border-box** from the default value of content-box. This ensures that the <span class="var">padding</span> doesn't affect the final width of the element.

```css
* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6, p, body {
  margin: 0;
}
```

## Community

This project is still in the alpha version and is being used and tested internally by the Polygon Team. You can reach out to the developers by joining our official [discord server](https://discord.gg/polygon).

You can give your suggestions and ask the queries in the `#polygon-mesh` channel on the server.
