# 🌍 Wanderlust

A full-stack vacation rental web application inspired by Airbnb. Users can explore listings, create their own properties, leave reviews, and manage their accounts — all through a clean and responsive interface.

---

## ✨ Features

- 🔐 **User Authentication** — Secure signup, login, and logout powered by Passport.js
- 🏡 **Listings Management** — Create, read, update, and delete property listings
- 📸 **Image Uploads** — Upload listing images stored securely on Cloudinary
- ⭐ **Reviews** — Authenticated users can leave reviews on listings
- 🗺️ **Map Integration** — View property locations on an interactive map
- ✅ **Form Validation** — Server-side validation using Joi
- 💬 **Flash Messages** — Real-time feedback for user actions
- 🔒 **Session Management** — Persistent sessions stored in MongoDB

---

## 🛠️ Tech Stack

| Layer        | Technology                              |
|--------------|-----------------------------------------|
| Runtime      | Node.js v22.14.0                        |
| Framework    | Express.js v5                           |
| Database     | MongoDB + Mongoose                      |
| Templating   | EJS + EJS-Mate                          |
| Auth         | Passport.js (Local Strategy)            |
| File Uploads | Multer + Cloudinary                     |
| Validation   | Joi                                     |
| Sessions     | express-session + connect-mongo         |
| Styling      | Bootstrap (via EJS layouts)             |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js v22.14.0](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- A [Cloudinary](https://cloudinary.com/) account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmanInAction/Wanderlust.git
   cd Wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   MONGODB_URL=your_mongodb_connection_string
   SECRET=your_session_secret

   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. **Start the server**
   ```bash
   node index.js
   ```

5. **Visit the app**

   Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📁 Project Structure

```
Wanderlust/
├── models/          # Mongoose models (User, Listing, Review)
├── routes/          # Express route handlers
├── views/           # EJS templates
│   └── layouts/     # Shared layout files (ejs-mate)
├── public/          # Static assets (CSS, JS, images)
├── middleware.js    # Custom middleware (auth, validation)
├── cloudConfig.js   # Cloudinary configuration
├── schema.js        # Joi validation schemas
├── app.js         # App entry point
└── .env             # Environment variables (not committed)
```

---

## 🔑 Environment Variables

| Variable          | Description                          |
|-------------------|--------------------------------------|
| `MONGODB_URL`     | MongoDB connection string            |
| `SECRET`          | Session secret key                   |
| `CLOUD_NAME`      | Cloudinary cloud name                |
| `CLOUD_API_KEY`   | Cloudinary API key                   |
| `CLOUD_API_SECRET`| Cloudinary API secret                |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 🐛 Issues

Found a bug or have a suggestion? Please [open an issue](https://github.com/AmanInAction/Wanderlust/issues).

---
