# JR Portfolio

An interactive card-based portfolio linking to five live projects.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev`.

## Deploy on Render

1. Create a new GitHub repository and upload everything in this folder.
2. In Render, choose **New → Static Site** and connect the repository.
3. Render should detect `render.yaml`. If entering settings manually, use:
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
4. Create the site.

Every push to the connected GitHub branch will trigger a new deployment.
