const express = require("express");
const router = express.Router();
const path = require("path");

// Home route
router.get("/", (req, res) => {
  // Display greeting and navigation links
  res.sendFile(path.join(__dirname, "..", "pages", "home.html"));
});
module.exports = router;
