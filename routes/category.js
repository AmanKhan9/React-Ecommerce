const express = require("express");
const { userSignupChecks } = require("../validator/index");
const { create } = require("../controllers/category");
const router = express.Router();

router.post("/category/create", create);

module.exports = router;
