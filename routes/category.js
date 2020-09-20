const express = require("express");
const { userSignupChecks } = require("../validator/index");
const { categoryById, create, read } = require("../controllers/category");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const router = express.Router();

router.post(
  "/category/create/:userId",
  [requireSignin, isAuth, isAdmin],
  create
);

router.get("/category/:categoryId", read);

router.param("categoryId", categoryById);
router.param("userId", userById);

module.exports = router;
