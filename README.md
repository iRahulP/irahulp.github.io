# My Portfolio

Welcome to my professional portfolio! This is a modern, interactive React app showcasing my experience, skills, and education.

## 🚀 View Live

Visit my portfolio at: **[iRahulP.github.io](https://irahulp.github.io)**

## 🏃 Run Locally

**Prerequisites:** Node.js (v16 or higher)

1. Clone the repository:
   ```bash
   git clone https://github.com/iRahulP/iRahulP.github.io.git
   cd iRahulP.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

4. Build for production:
   ```bash
   npm run build
   ```

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Animations:** Motion (Framer Motion)
- **Build Tool:** Vite
- **Icons:** Lucide React

## 📦 Deploy to GitHub Pages

This repo is set up to build the Vite app and publish the generated output into the `docs/` folder.

- For a **profile site**, name the repository `username.github.io`. The site will be available at `https://username.github.io/`.
- For a **project site**, any repository name works and the site will be available at `https://username.github.io/repo/`.

GitHub Pages should be configured to deploy from:

- **Branch:** `main`
- **Folder:** `docs`

Deployment workflow:

- There's a workflow at `/.github/workflows/deploy.yml` that runs on `push` to the `main` branch. It installs dependencies, runs `npm run build`, and copies the generated output into `docs/`.
- A small workaround retries installation if `npm ci` fails due to optional native bindings (common with some optional dependencies).

Local test & build commands:

```bash
npm ci
npm run build
npm run preview
# or serve the dist folder
npm install -g serve
serve -s dist
```

Notes:

- I added a `.nojekyll` file to the repo root so GitHub Pages will not process the site with Jekyll and will serve all files directly.
- After pushing to `main`, check the Actions run in the repository's Actions tab, then confirm the site at Settings → Pages if needed. The Pages action usually publishes automatically.

If you'd like, I can push the workflow and these changes to the remote for you.
