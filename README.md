# AngularUI

AngularUI is an open-source collection of prebuilt UI components, based on the utility-first Tailwind CSS framework.

[![LicenceMIT](https://camo.githubusercontent.com/a4426cbe5c21edb002526331c7a8fbfa089e84a550567b02a0d829a98b136ad0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667)](https://opensource.org/license/MIT)

![LicenceMIT](https://raw.githubusercontent.com/sergiocode91/ngx-angular-ui/main/projects/documentation/src/assets/cover-readme.webp)

## Documentation

You can find the AngularUI documentation on our [website.](https://www.angularui.dev/)


## What is AngularUI

AngularUI is a UI component library for `Angular` that allows you to effortlessly create beautiful and accessible interfaces. Built on `Tailwind CSS`, it offers seamless integration and great flexibility. Simplify development with customizable, modern components, enhancing the user experience.

## Getting Started

#### 1- Install Library:

```bash
npm install ngx-angular-ui@latest
```

#### 2- Install TailwindCSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Configure `tailwind.config.js` to enable dark mode and define the content, including the path to ngx-angular-ui components:

```bash
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

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
