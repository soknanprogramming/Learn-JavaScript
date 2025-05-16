// app.js
const express = require('express');
const connectToDatabase = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3000;

let db;

async function initializeApp() {
  db = await connectToDatabase();
  app.set("db", db); // Make db available via req.db

  // Attach db to every request
  app.use((req, res, next) => {
    req.db = req.app.get("db");
    next();
  });

  app.use(express.json()); // it use for parsing JSON data
  app.use(express.urlencoded({ extended: true })); // it use for parsing URL-encoded data

  app.use("/books", bookRoutes);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

initializeApp();