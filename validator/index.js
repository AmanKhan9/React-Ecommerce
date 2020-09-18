const { check, validationResult } = require("express-validator");

exports.userSignupChecks = [
  check("name", "Name is required").notEmpty(),
  check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({ min: 4, max: 32 }),
  check("password", "Password is required").notEmpty(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain atleast 6 characters")
    .matches(/\d/)
    .withMessage("Password must contrain a number"),
];

exports.userSignupValidator = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return firstError;
  }
  return "";
};
