const User = require("../models/User");
const { errorHandler } = require("../helpers/dbErrorHandler");
const { userSignupValidator } = require("../validator/index");

exports.signup = (req, res) => {
  const user = new User(req.body);
  const signupError = userSignupValidator(req);
  if (signupError !== "") {
    return res.status(400).json({ error: signupError });
  }
  user.save((err, user) => {
    if (err) {
      console.log("err", err);
      return res.status(400).json({
        err: errorHandler(err),
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({ user });
  });
};
