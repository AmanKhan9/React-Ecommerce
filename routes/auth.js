const express = require("express");
const { userSignupChecks } = require("../validator/index");
const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");
const router = express.Router();

router.post("/signup", userSignupChecks, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
