# Material UI - Vite.js in TypeScript example

## How to use

Install it and run:

```bash
npm install
npm run dev
```

## The idea behind the example

This example uses [Vite.js](https://github.com/vitejs/vite).
It includes `@mui/material` and its peer dependencies, including [Emotion](https://emotion.sh/docs/introduction), the default style engine in Material UI v5.

### 🚫 Avoid Using Stack as a Wrapper for Pages! 🚫

🚩 Issue: When using Stack as a wrapper, content intended for landscape orientation gets cut off to the width of a portrait-oriented page, creating display issues.

👉 Solution: Explore our repository to learn methods for managing different page orientations without using Stack, thereby avoiding content clipping issues.