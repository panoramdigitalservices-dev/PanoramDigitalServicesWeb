# Panarom Digital Services

Welcome to the **Panarom Digital Services** codebase! This is a modern, high-performance web application built with **TanStack Start** (React), **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 How to Run Locally

Since the project includes a `bun.lock` file, **Bun** is the recommended package manager and runtime for the best performance. However, you can also use standard package managers like `npm`, `pnpm`, or `yarn`.

### Prerequisites
Make sure you have Node.js (v18+) or Bun installed on your system.

### 1. Install Dependencies
Run one of the following commands in the root directory:

```bash
# Recommended (Bun)
bun install

# Alternative (npm)
npm install

# Alternative (pnpm)
pnpm install

# Alternative (yarn)
yarn install
```

### 2. Start the Development Server
Run the dev script to spin up the local development server:

```bash
# Recommended (Bun)
bun run dev

# Alternative (npm)
npm run dev

# Alternative (pnpm)
pnpm run dev

# Alternative (yarn)
yarn run dev
```

By default, the server will start, and you can access the application at:
👉 **[http://localhost:3000](http://localhost:3000)** (or the port indicated in your console output).

---

## 🛠️ Production Build and Preview

To build the application for production and test the production-ready build locally:

### 1. Build the App
```bash
bun run build    # Or npm run build
```

### 2. Preview the Build
```bash
bun run preview  # Or npm run preview
```

---

## 📂 Project Structure

Here is a quick overview of the key directories and files in this workspace:

- **`src/`**: Main source code folder.
  - **`routes/`**: File-based routing folder (TanStack Start). Every `.tsx` file here corresponds to a page/route.
    - `__root.tsx`: The root shell/layout wrapping all pages.
    - `index.tsx`: Homepage (`/`).
    - `blog.tsx`: Blog page (`/blog`).
    - `community.tsx`: Community page (`/community`).
    - `contact.tsx`: Contact/inquiry page (`/contact`).
  - **`components/`**: Reusable UI components (buttons, layout wrappers, cards, etc.).
  - **`hooks/`**: Custom React hooks.
  - **`lib/`**: Utility functions and configurations.
  - **`styles.css`**: Global Tailwind styles.
  - **`routeTree.gen.ts`**: Auto-generated route tree configuration (do not edit manually).
  - **`router.tsx`**: TanStack Router configuration.
  - **`server.ts`**: Entry point for server-side rendering (SSR) wrapper.
  - **`start.ts`**: Entry point for client bootstrap.
- **`public/`**: Static assets like logos, images, and fonts.
- **`package.json`**: Script definitions and npm dependency manifest.
- **`vite.config.ts`**: Vite bundle configuration.
- **`bunfig.toml`**: Custom installation/dependency configuration for Bun.
