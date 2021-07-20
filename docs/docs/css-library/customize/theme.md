# Theme
The colors can be customized by overriding the css variables. The default values are as follows. 

```css
:root {
  --gray-900: #0a0b0d;
  --gray-800: #1b1d22;
  --gray-700: #292c34;
  --gray-600: #52555d;
  --gray-500: #b0b4bb;
  --gray-400: #c0c3c9;
  --gray-300: #dddfe0;
  --gray-200: #f7f7f8;
  --gray-100: #ffffff;

  --primary-900: #2c1752;
  --primary-800: #3c1f70;
  --primary-700: #4e2892;
  --primary-600: #6433b9;
  --primary-500: #7b3fe4;
  --primary-400: #aa84ed;
  --primary-300: #d0baf5;
  --primary-200: #eae0fb;
  --primary-100: #faf7fe;

  --secondary-900: #193d45;
  --secondary-800: #22535e;
  --secondary-700: #2b6d7b;
  --secondary-600: #378a9c;
  --secondary-500: #44aac0;
  --secondary-400: #87c9d7;
  --secondary-300: #bce0e8;
  --secondary-200: #e1f1f5;
  --secondary-100: #f8fcfc;

  --success-900: #16443e;
  --success-800: #1d5d55;
  --success-700: #267a6f;
  --success-600: #319a8d;
  --success-500: #3cbeae;
  --success-400: #82d5cb;
  --success-300: #b9e8e2;
  --success-200: #e0f5f2;
  --success-100: #f7fcfc;

  --warning-900: #593515;
  --warning-800: #7a491d;
  --warning-700: #9e5e25;
  --warning-600: #c9782f;
  --warning-500: #f8943a;
  --warning-400: #faba81;
  --warning-300: #fdd9b8;
  --warning-200: #feeedf;
  --warning-100: #fffbf7;

  --error-900: #531919;
  --error-800: #712222;
  --error-700: #952c2c;
  --error-600: #bc3838;
  --error-500: #e84545;
  --error-400: #f18888;
  --error-300: #f7bcbc;
  --error-200: #fbe1e1;
  --error-100: #fef8f8;
}
```

The variables are defined in `_colors.scss` file. To override the colors, you can either edit the color codes in the `_colors.scss` file (if you are using the scss source code) or override the variables in the custom css file. *Make sure the custom css file is imported after the Polygon Mesh files.* 