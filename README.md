# Siatara Hussain — PMP & Scrum Coaching Website

A modern portfolio and coaching website for **Siatara Hussain**, built with React, Vite, Tailwind CSS, Node.js, and Express.

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, Lucide React
- **Backend:** Node.js, Express.js, Nodemailer
- **Design:** Soft feminine premium palette with dusty rose accents

## Project Structure

```
Portfolio-website/
├── frontend/        # React frontend
├── backend/         # Express API
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── data/
│   └── middleware/
└── package.json     # Root scripts
```

## Getting Started

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure environment (optional)

Copy the backend env example and add SMTP credentials if you want real email delivery:

```bash
cp backend/.env.example backend/.env
```

Without SMTP configured, contact form submissions are logged to the backend console.

### 3. Run development servers

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

The Vite dev server proxies `/api` requests to Express.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run frontend and backend concurrently |
| `npm run dev:frontend` | Run frontend only |
| `npm run dev:backend` | Run backend only |
| `npm run build` | Build frontend for production |
| `npm start` | Serve production build via Express |

## Production

```bash
npm run build
NODE_ENV=production npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form (`name`, `email`, `phone`, `message`) |
| POST | `/api/booking` | Submit booking inquiry (`name`, `email`, `selectedCourse`, `preferredDate`, `message`) |
| GET | `/api/courses` | Get all courses |
| GET | `/api/testimonials` | Get all testimonials |

### Contact form payload

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1 555 123 4567",
  "message": "I'd like to book a consultation."
}
```

### Booking form payload

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "selectedCourse": "PMP Certification Bootcamp",
  "preferredDate": "2026-07-15",
  "message": "Interested in evening sessions."
}
```

## Color Palette

| Token | Hex |
|-------|-----|
| Primary background | `#D2C3C0` |
| Primary accent | `#C7A6A7` |
| Ivory | `#FAF7F5` |
| Charcoal text | `#3D3535` |
