# Getting Started

AngularUI is an open-source collection of prebuilt UI components, based on the utility-first Tailwind CSS framework.

[![LicenceMIT](https://camo.githubusercontent.com/a4426cbe5c21edb002526331c7a8fbfa089e84a550567b02a0d829a98b136ad0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667)](https://opensource.org/license/MIT)

<div align="center">
  <img src="https://raw.githubusercontent.com/sergiocode91/ngx-angular-ui/main/projects/documentation/src/assets/cover-readme.webp" alt="AngularUI" width="700">
</div>

## Documentation

You can find the AngularUI documentation on our [website.](https://www.angularui.dev/)

### Requirements:

* [Angular](https://www.angular.dev/) 17 or later.
* [Tailwind CSS](https://tailwindcss.com/) 3.4 or later.

### Optional Requirements:

* [Fontsource](https://fontsource.org/) 5.0 or later.
* [Lucide](https://lucide.dev/) 0.3 or later.

## What is AngularUI

AngularUI is a UI component library for `Angular` that allows you to effortlessly create beautiful and accessible interfaces. Built on `Tailwind CSS`, it offers seamless integration and great flexibility. Simplify development with customizable, modern components, enhancing the user experience.

## Installation Guide

#### 1- Install Library:

```bash
npm install ngx-angular-ui@latest
```

#### 2- Install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Configure `tailwind.config.js` to enable `darkMode` and define the content, including the path to ngx-angular-ui components:

```javascript
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/ngx-angular-ui/**/*.{html,ts,js,mjs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 3- Include tailwind import:

Add the following directives to your main CSS file to include Tailwind CSS base styles, components, and utilities:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Installation Optional

For a better visual experience, we recommend using the `Geist Sans font`. You can install it and add it to your project by following these steps:

```bash
npm install @fontsource/geist-sans
```

Add the font imports to your main styles file (e.g., styles.css or styles.scss):

```css
@import '@fontsource/geist-sans/300.css';
@import '@fontsource/geist-sans/400.css';
@import '@fontsource/geist-sans/500.css';
@import '@fontsource/geist-sans/600.css';
@import '@fontsource/geist-sans/700.css';
@import '@fontsource/geist-sans/800.css';
@import '@fontsource/geist-sans/900.css';
```

Add the following CSS to ensure the font is applied throughout your application:

```css
body {
  font-family: 'Geist Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

## Licence

This project is licensed under the [MIT License.](https://opensource.org/license/MIT)
