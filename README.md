# 🌍 Wanderlust

A full-stack vacation rental web application inspired by Airbnb. Users can explore listings, create their own properties, leave reviews, and manage their accounts — all through a clean and responsive interface.

---

## ✨ Features

- 🔐 **User Authentication** — Secure signup, login, and logout via Passport.js (Local Strategy)
- 🏡 **Listings** — Create, read, update, and delete property listings
- 📸 **Image Uploads** — Listing images stored securely on Cloudinary via Multer
- ⭐ **Reviews** — Authenticated users can post and delete reviews on listings
- 💬 **Flash Messages** — Success and error feedback on every action
- 🔒 **Persistent Sessions** — Sessions stored in MongoDB Atlas with encrypted secrets
- ✅ **Schema Validation** — Server-side validation using Joi
- 🛡️ **Error Handling** — Custom `ExpressError` class with a dedicated error page
- 🌐 **Production-ready** — Environment-aware config (`.env` skipped in production)

---

## 🛠️ Tech Stack

| Layer           | Technology                                      |
|-----------------|-------------------------------------------------|
| Runtime         | Node.js v22.14.0                                |
| Framework       | Express.js v5                                   |
| Database        | MongoDB Atlas + Mongoose                        |
| Templating      | EJS + EJS-Mate (layout engine)                  |
| Authentication  | Passport.js (Local Strategy)                    |
| Session Store   | connect-mongo (MongoDB-backed sessions)         |
| File Uploads    | Multer + multer-storage-cloudinary + Cloudinary |
| Validation      | Joi                                             |
| Flash Messages  | connect-flash                                   |
| Misc            | method-override, dotenv                         |

---

## 📁 Project Structure

```
Wanderlust/
├── models/
│   ├── user.js          # User model (passport-local-mongoose)
│   ├── listing.js       # Listing model
│   └── review.js        # Review model
├── routes/
│   ├── listing.js       # /listings routes
│   ├── review.js        # /listings/:id/reviews routes
│   └── user.js          # /, /login, /signup, /logout routes
├── views/
│   ├── layouts/         # EJS-Mate shared layouts
│   ├── listings/        # Listing templates
│   ├── users/           # Auth templates
│   └── error.ejs        # Error page
├── public/              # Static assets (CSS, JS, images)
├── utils/
│   ├── wrapAsync.js     # Async error wrapper
│   └── expressError.js  # Custom error class
├── index.js             # App entry point
├── .env                 # Environment variables (not committed)
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js v22.14.0](https://nodejs.org/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account
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
   ATLAS_DB_URL=your_mongodb_atlas_connection_string
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

## 🔑 Environment Variables

| Variable          | Description                              |
|-------------------|------------------------------------------|
| `ATLAS_DB_URL`    | MongoDB Atlas connection string          |
| `SECRET`          | Session & MongoStore encryption secret   |
| `CLOUD_NAME`      | Cloudinary cloud name                    |
| `CLOUD_API_KEY`   | Cloudinary API key                       |
| `CLOUD_API_SECRET`| Cloudinary API secret                    |

> ⚠️ Never commit your `.env` file. Make sure it's listed in `.gitignore`.

---

## 🛣️ Routes Overview

| Method | Route                          | Description                  |
|--------|--------------------------------|------------------------------|
| GET    | `/listings`                    | View all listings             |
| POST   | `/listings`                    | Create a new listing          |
| GET    | `/listings/:id`                | View a listing                |
| PUT    | `/listings/:id`                | Update a listing              |
| DELETE | `/listings/:id`                | Delete a listing              |
| POST   | `/listings/:id/reviews`        | Add a review                  |
| DELETE | `/listings/:id/reviews/:rid`   | Delete a review               |
| GET    | `/signup`                      | Signup form                   |
| POST   | `/signup`                      | Register a new user           |
| GET    | `/login`                       | Login form                    |
| POST   | `/login`                       | Authenticate user             |
| GET    | `/logout`                      | Logout user                   |

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

This project is licensed under the **ISC License**.
