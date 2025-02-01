# Discussion and Collaboration Repo

This repository is created for developers to **discuss**, **collaborate**, and resolve coding problems, errors, and related issues.

## Contents

### Issues

- **Tailwind Version 4 CLI in an HTML, CSS, and JS project**
  - **Issue 1**: Problems with the `tailwind.config.js` file.
    - **Solution**: Manually create a `tailwind.config.js` file and set the following code:
    ```js
    module.exports = {
      content: ["./src/**/*.{html,js}"],
      safelist: [""], // (Add any classes you want to ensure are included)
      theme: {
        extend: {
          // Add custom theme extensions here
        },
      },
      plugins: [],
    };
    ```
  - **Issue 2**: Problems with custom Tailwind styling.
    - **Solution**: Use the `src/input.css` file for all custom Tailwind styling.
    ```css
    @import "tailwindcss";

    /* Custom Styles */
    :root {
      --test-color: #ffffff; /* White */
      --bgc: #ff0000; /* Red */
      --primary: #3498db; /* Blue */
      --secondary: #2ecc71; /* Green */
      --accent: #f39c12; /* Orange */
    }

    /* Use CSS variables */
    .text-test-color {
      color: var(--test-color);
    }
    .bg-bgc {
      background-color: var(--bgc);
    }
    .text-primary {
      color: var(--primary);
    }
    .text-secondary {
      color: var(--secondary);
    }
    .text-accent {
      color: var(--accent);
    }
    ```
  

## How to Run This Repo

### Step 1: Install Dependencies

First, install all the necessary packages:

```bash
npm install
```

### Step 2: Run Tailwind CLI
Open the project folder in your IDE and run the following command in the terminal. This will watch for changes and save the updated code and interface:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
