# Mental Math Trainer

A web app for practicing mental arithmetic and memory - multiplication quizzes plus a card-memory quiz. The quiz logic itself is a static frontend in `docs/` (playable directly, or served as a GitHub Pages site); `src/` is a minimal Express + TypeScript backend currently handling just auth (login/register/current user).

## Running the backend

```bash
npm install
npx tsx src/index.ts
```

Starts on `http://localhost:3000`. (No build/dev script is currently defined in `package.json` - this runs the TypeScript source directly.)

## Running the frontend

Open `docs/mentalmath.html` (or `docs/index.html`) directly in a browser, or serve the `docs/` folder with any static file server.
