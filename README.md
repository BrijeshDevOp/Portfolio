# Portfolio Website

My personal portfolio built with **React** and **Vite**. It showcases projects, skills, education, certificates, and contact information.

## Demo

[https://BrijeshDevOp.github.io/Portfolio](https://BrijeshDevOp.github.io/Portfolio)

## Features

- Responsive, mobile-friendly UI
- Project showcases with images and descriptions
- Downloadable resume
- Contact section
- Built with React + Vite for fast performance

## Tech Stack

- React 19
- Vite 6
- JavaScript (ESNext)
- CSS (custom styling)
- GitHub Pages (hosting)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

Check your versions:

```bash
node -v
npm -v
```

### Installation

Clone and install dependencies:

```bash
git clone https://github.com/BrijeshDevOp/Portfolio.git
cd Portfolio
npm install
```

### Local Development

Start the dev server with hot reload:

```bash
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

## Available Scripts

Run the following from the project root:

```bash
# Start local dev server
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview

# Lint the project
npm run lint
```

## Build

Create an optimized production build:

```bash
npm run build
```

The built assets will be available in the `dist/` directory.

## Deployment (Render)

This site can be deployed as a static site on Render from a private GitHub repository.

Steps:

1) Push your code to GitHub (private repo is fine).
2) On Render, click "New" → "Static Site" and connect your GitHub account.
3) Select this repository.
4) Configure:
   - Build Command: `npm ci && npm run build` (or `npm install && npm run build`)
   - Publish Directory: `dist`
5) Click Deploy. Render will build and host your site.

Notes:
- You do not need GitHub Pages. Render will serve from the built `dist/` output.
- When you push changes to your default branch, Render can auto-deploy.

## Project Structure

```
.
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

This is a personal portfolio. I’m not accepting contributions, pull requests, or change requests. If you find a viewing issue on the live site, you may open an issue for awareness only. Please do not submit PRs.

## License

All rights reserved. The content of this repository (including text, images, graphics, and branding) may not be copied, modified, or redistributed without my explicit written permission. You may reference the structure or ideas for learning purposes, but do not reuse content or assets.

## Contact

- GitHub: https://github.com/BrijeshDevOp
- Live Site: https://BrijeshDevOp.github.io/Portfolio