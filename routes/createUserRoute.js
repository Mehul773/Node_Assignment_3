const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/create", (req, res) => {
  // Display form for creating user and navigation links
  res.sendFile(path.join(__dirname, "..", "pages", "createUser.html"));
});

module.exports = router;
