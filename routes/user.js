const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Helo from node");
});

module.exports = router;
