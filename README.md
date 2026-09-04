# Express Post Management API & Frontend

A RESTful web application built with **Express 5** and **Node.js (ES Modules)**, featuring custom middleware, a post controller API, and a lightweight frontend user interface.

---

## 🚀 Key Features

- **RESTful API Endpoints**: Full CRUD operations for post management (`GET`, `POST`, `PUT`, `DELETE`).
- **Custom Middleware**:
  - `logger`: Color-coded HTTP request logging using the `colors` package.
  - `notFound`: Custom 404 handler for missing routes.
  - `errorHandler`: Centralized error handling middleware.
- **Static File Serving**: Serves frontend client files directly from the `public/` directory.
- **ES Modules**: Utilizes modern JavaScript `import`/`export` syntax.

---

## 🛠️ Technology Stack

- **Runtime**: [Node.js](https://nodejs.org/) (v18+)
- **Framework**: [Express 5](https://expressjs.com/)
- **Utility**: [colors](https://www.npmjs.com/package/colors) (Console logging)
- **Frontend**: Plain HTML5 & JavaScript (Fetch API)

---

## 📂 Project Structure

```text
├── controller/
│   └── postcontroller.js   # In-memory post CRUD logic
├── middleware/
│   ├── error.js            # Global error handling middleware
│   ├── logger.js           # Colorized HTTP request logger
│   └── notfound.js         # 404 route handler
├── public/
│   ├── js/
│   │   └── main.js         # Client-side API interactions
│   ├── about.html          # Static page
│   └── index.html          # Frontend UI for posts
├── routes/
│   └── post.js             # Express router for /api/post endpoints
├── .env.example            # Environment variables template
├── package.json            # Node.js dependencies and scripts
└── server.js               # Application entry point
```

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-tutorial
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

### Running Locally

Start the server:
```bash
npm start
```

Or run with automatic reload (Node.js `--watch` mode):
```bash
npm run dev
```

The server will start on `http://localhost:5000` (or the `PORT` specified in your `.env` file).

---

## 📡 API Endpoints

| Method | Endpoint | Description | Query Parameters / Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/post` | Retrieve posts | Optional: `?limit=N` |
| `GET` | `/api/post/:id` | Retrieve single post by ID | None |
| `POST` | `/api/post` | Create a new post | Body: `{ "title": "...", "content": "..." }` |
| `PUT` | `/api/post/:id` | Update an existing post | Body: `{ "title": "...", "content": "..." }` |
| `DELETE` | `/api/post/:id` | Delete a post by ID | None |

---

## ⚙️ Environment Variables

| Variable | Description | Default |
| :--- | :--- | :--- |
| `PORT` | Port for Express server to listen on | `5000` |
