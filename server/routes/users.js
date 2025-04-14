const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Example route: GET all users
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

module.exports = router;
