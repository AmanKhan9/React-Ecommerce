const User = require("../models/User");
const { errorHandler } = require("../helpers/dbErrorHandler");
const { userSignupValidator } = require("../validator/index");
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

exports.signup = (req, res) => {
  const user = new User(req.body);
  const signupError = userSignupValidator(req);
  if (signupError !== "") {
    return res.status(400).json({ error: signupError });
  }
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({ user });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "User with the email doesnot exist.Please signup" });
    }
  });

  if (!user.authenticate(password)) {
    return res.status(401).json({ error: "Email and password don't match" });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.cookie("t", token, { expire: new Date() + 9999 });
  const { _id, name, email, role } = user;
  return res.json({ token, user: { _id, name, email, role } });
};
