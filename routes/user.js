const express = require("express");
const { userSignupChecks } = require("../validator/index");
const { signup, signin, signout } = require("../controllers/user");
const router = express.Router();

router.post("/signup", userSignupChecks, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
