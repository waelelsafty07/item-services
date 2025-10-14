# Portfolio with Fastify and React

This project showcases a modern developer portfolio with a Fastify backend that serves structured
content and a React single-page application that consumes the API.

## Project structure

```
.
├── backend        # Fastify server exposing portfolio endpoints
└── frontend       # React (Vite) client that renders the portfolio UI
```

## Backend (Fastify)

### Available endpoints

- `GET /api/profile` – General profile information and contact links.
- `GET /api/skills` – Skills grouped by category.
- `GET /api/experience` – Work history and achievements.
- `GET /api/projects` – Highlighted side projects.
- `GET /api/testimonials` – Quotes from collaborators.
- `GET /api/timeline` – Career milestones.

### Getting started

```bash
cd backend
npm install
npm run start
```

The server listens on **http://localhost:4000** by default. All routes respond with JSON structures
consumed by the React application.

## Frontend (React + Vite)

The React app fetches data from the Fastify backend and presents it in themed sections with subtle
animations and gradient styling.

```bash
cd frontend
npm install
npm run dev
```

The development server runs on **http://localhost:5173** and proxies `/api/*` requests to the
Fastify backend. Make sure the backend is running before starting the frontend for live data.

To build the production bundle:

```bash
npm run build
```

## Environment variables

- `PORT` – Override the Fastify port (defaults to `4000`).
- `HOST` – Override the Fastify host (defaults to `0.0.0.0`).

## Deployment notes

- Deploy the backend to any Node-compatible environment (e.g., Render, Fly.io, or AWS). Ensure the
  `HOST` and `PORT` variables are set to the platform requirements.
- Host the frontend on static hosting (e.g., Vercel, Netlify). Update the proxy or API base URL in
  `frontend/vite.config.js` if the backend lives on a different domain in production.

## License

This repository is provided as an educational example. Customize the copy, data, and styling to make
it your own.
