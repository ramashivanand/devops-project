const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from DevOps Backend! ??" });
});
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});
app.get("/api/projects", (req, res) => {
  res.json([
    { id: 1, name: "CI/CD Pipeline", status: "active" },
    { id: 2, name: "Docker Setup", status: "completed" },
    { id: 3, name: "GitHub Actions", status: "active" }
  ]);
});

module.exports = app;
