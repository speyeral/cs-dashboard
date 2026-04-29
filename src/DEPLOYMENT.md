# Deployment Guide

This guide provides instructions for deploying your static React application to Vercel or GitHub Pages.

## Option 1: Vercel (Recommended)

Vercel is a zero-configuration platform for static sites and serverless functions.

1.  **Push to GitHub:** Make sure your project is on a GitHub repository.

2.  **Import Project on Vercel:**
    *   Sign up for a free account at [vercel.com](https://vercel.com).
    *   Click "Add New..." > "Project".
    *   Select your GitHub repository. Vercel will automatically detect that it's a Vite project.

3.  **Configure and Deploy:**
    *   **Framework Preset:** Should be automatically set to "Vite".
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
    *   Click "Deploy".

Your site will be built and deployed. Vercel will provide you with a live URL.

## Option 2: GitHub Pages

You can also host your site for free on GitHub Pages.

### Step 1: Set the `base` in `vite.config.js`

You need to tell Vite the sub-path your project will be deployed to. If your GitHub repository is named `cs-dashboard`, your site will be at `https://<YOUR-USERNAME>.github.io/cs-dashboard/`.

Modify your `vite.config.js` file and set the `base` option:

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cs-dashboard/' // Replace with your repository name
})
```

### Step 2: Install `gh-pages`

This package helps with deploying to the `gh-pages` branch.

```bash
npm install gh-pages --save-dev
```

### Step 3: Add Deploy Scripts to `package.json`

Add the `predeploy` and `deploy` scripts to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 4: Deploy

Run the deploy script:

```bash
npm run deploy
```

This will build your project and push the contents of the `dist` directory to a `gh-pages` branch on your repository. You can then configure GitHub Pages in your repository settings to serve from that branch.