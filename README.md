# Electron Hello World

A minimal Electron "Hello World" app with a CI/CD build & publish pipeline to GitHub Releases.

## Project Structure

```
electron-learn/
├── src/
│   ├── main.js        # Main process (Node.js / Electron entry point)
│   ├── preload.js     # Preload script (bridges main ↔ renderer safely)
│   ├── index.html     # UI
│   └── renderer.js    # Renderer process script
├── .github/
│   └── workflows/
│       └── build.yml  # GitHub Actions: build & release on every v* tag
├── package.json
└── .gitignore
```

## Getting Started

```bash
npm install      # install dependencies
npm start        # run the app locally
```

## Building Locally

```bash
npm run build:mac    # macOS  → dist/ (.dmg + .zip)
npm run build:win    # Windows → dist/ (.exe installer)
npm run build:linux  # Linux  → dist/ (.AppImage + .deb)
npm run build        # all platforms at once
```

Output files land in the `dist/` folder.

## Publishing to GitHub Releases

### One-time setup

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens**
2. Create a token with **Contents: Read & Write** permission for this repo.
3. Add it as a repository secret named **`GH_TOKEN`**:
   - Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

### Trigger a release

Push a version tag — the workflow builds for macOS, Windows, and Linux and uploads to GitHub Releases automatically:

```bash
git tag v1.0.0
git push origin v1.0.0
```

You can also trigger the workflow manually from **GitHub → Actions → Build & Release → Run workflow**.

## Automatic Updates (optional)

Because the repo is public and uses GitHub Releases, pair it with [update.electronjs.org](https://update.electronjs.org/) to deliver auto-updates to users for free.

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Electron](https://www.electronjs.org/) | Desktop runtime |
| [Electron Builder](https://www.electron.build/) | Packaging & publishing |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |
| [GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github) | Distribution |
