// This is how you load environment variables from a .env file into your 
// Node.js application using the dotenv package.
// why it use=
// Security: Keep sensitive info (like passwords, API keys) out of your codebase.
// Flexibility: Easy to switch environments (dev, staging, prod) just by changing the .env file.
// Clean code: All your config values are in one place.

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors"); // It's a security feature built into web browsers that controls which domains are allowed to access resources on your server.

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

module.exports = app;

