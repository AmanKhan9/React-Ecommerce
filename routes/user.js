const express = require("express");
const { userSignupChecks } = require("../validator/index");
const { signup } = require("../controllers/user");
const router = express.Router();

router.post("/signup", userSignupChecks, signup);

module.exports = router;
