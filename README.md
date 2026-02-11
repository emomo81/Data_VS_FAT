# Hello World Deployment Project

This project demonstrates a simple full-stack application deployable to Vercel (Frontend), Render (Backend), and Supabase (Database).

## Project Structure

- `client/`: React Frontend (Vite)
- `server/`: Node.js Express Backend
- `render.yaml`: Render Blueprint configuration (Infrastructure as Code)

## Local Setup

### 1. Backend Setup
1.  Navigate to `server` directory: `cd server`
2.  Copy `.env.example` to `.env`: `cp .env.example .env` (or copy/paste content)
3.  Fill in your `SUPABASE_URL` and `SUPABASE_KEY` in `.env`.
4.  Install dependencies: `npm install`
5.  Start server: `npm start`
    - Server runs on `http://localhost:3000`.

### 2. Frontend Setup
1.  Navigate to `client` directory: `cd client`
2.  (Optional) Create `.env.local` with `VITE_BACKEND_URL=http://localhost:3000`.
3.  Install dependencies: `npm install`
4.  Start dev server: `npm run dev`
    - Frontend runs on `http://localhost:5173`.

## Deployment

### Supabase
1.  Create a project on [Supabase](https://supabase.com/).
2.  Get API URL and Anon Key.

### Render (Backend)
1.  Create a **Web Service** on [Render](https://render.com/).
2.  Connect your repo.
3.  **Root Directory**: `hello-deploy/server`
4.  **Build Command**: `npm install`
5.  **Start Command**: `node index.js`
6.  **Environment Variables**: Add `SUPABASE_URL` and `SUPABASE_KEY`.

### Vercel (Frontend)
1.  Import project on [Vercel](https://vercel.com/).
2.  **Root Directory**: `hello-deploy/client`
3.  **Framework Preset**: Vite
4.  **Environment Variables**: Add `VITE_BACKEND_URL` = `https://your-render-app-url.onrender.com`.
5.  Deploy.
