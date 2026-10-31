# Amit Pandey — Developer Portfolio

A responsive, clean-minimal portfolio built with React, Vite, Tailwind CSS v4, Motion, and Lucide icons.

## Requirements
- Node.js LTS (npm is included)
- VS Code
- A browser

## Run locally on Windows

Open this folder in VS Code. In **Terminal → New Terminal**, run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Create a production build

```bash
npm run build
npm run preview
```

Vite writes the deployable website to `dist/`.

## Deploy on Vercel

1. Create a GitHub repository and upload/push this project.
2. Sign in at https://vercel.com/ and import the repository.
3. Vercel should detect Vite automatically. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Vercel gives you a public URL.
5. When you push later changes to the connected GitHub branch, Vercel redeploys them.

## Personalize before publishing

Search in `src/App.jsx` for:
- `your-email@example.com` and replace it with your real contact email.
- Project titles, descriptions, tags, and links. Keep only work you can explain in an interview.
- Social links if your profiles change.
- Skills list. Only list technologies you can discuss confidently.

The current hero artwork is made with CSS shapes and initials, so no image asset is required.

## Important notes
- The contact button opens the visitor's email application using `mailto:`. It does not send a message through a website backend.
- The projects use example descriptions and links based on portfolio project concepts; verify each link and update descriptions to match the finished project.
- Do not put API keys or passwords in frontend source files.
