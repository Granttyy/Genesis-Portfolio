# Genesis Portfolio 🚀

A modern **full-stack developer portfolio** built with **Next.js, TypeScript, and Docker**, designed to showcase projects, skills, and provide a functional contact system using EmailJS.

---

## 📌 Features

* ⚡ Built with Next.js (App Router)
* 🎨 Styled with Tailwind CSS
* 📩 Functional contact form (EmailJS integration)
* 📄 Resume download link
* 🐳 Dockerized for easy deployment
* 🔄 CI setup with GitHub Actions
* 📱 Fully responsive design

---

## 🛠️ Tech Stack

* **Frontend:** Next.js, React, TypeScript
* **Styling:** Tailwind CSS
* **Backend/Services:** EmailJS
* **Deployment:** Docker, Docker Compose
* **CI/CD:** GitHub Actions

---

## 📂 Project Structure

```
.
├── app/                # Next.js app directory
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global styles
├── .github/workflows/  # CI pipeline (Docker)
├── Dockerfile          # Docker configuration
├── compose.yaml        # Docker Compose setup
└── README.Docker.md    # Docker usage guide
```

---

## ⚙️ Environment Variables

Create a `.env` file based on `.envexample`:

```
# Resume link for hero section
NEXT_PUBLIC_RESUME_LINK=""

# EmailJS configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=""
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=""
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=""
```

---

## 🚀 Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run development server

```
npm run dev
```

App will be available at:

```
http://localhost:3000
```

---

## 🐳 Run with Docker

### Build and run

```
docker compose up --build
```

Or manually:

```
docker build -t genesis-portfolio .
docker run -p 3000:3000 genesis-portfolio
```

---

## 📦 Production Build

```
npm run build
npm start
```

---

## 🔄 CI/CD

GitHub Actions is configured to automatically build the Docker image on push using:

```
.github/workflows/docker-ci.yml
```

---

## 📬 Contact Form Setup (EmailJS)

1. Create an account at EmailJS
2. Create a service and template
3. Add your keys in `.env`

---

## 🧑‍💻 Author

**Genesis Grant Vivero**
📧 [genesisgrantvivero@gmail.com](mailto:genesisgrantvivero@gmail.com)

---

## 📄 License

This project is open-source and available under the MIT License.

---

## ⭐ Notes

* Ensure environment variables are set before deployment
* Docker build uses **standalone Next.js output** for optimized production
* Public assets are explicitly copied in Docker for proper rendering

---
