const express = require("express");
const router = express.Router();
const passport = require("passport");
const catchAsinc = require("../utils/catchAsync");
const User = require("../models/user");
const users = require("../controllers/users.js");

router.route("/register").get(users.renderRegister).post(catchAsinc(users.register));

router
  .route("/login")
  .get(users.renderLogin)
  .post(passport.authenticate("local", { failureFlash: true, failureRedirect: "/login" }), users.login);

router.get("/logout", users.logout);

module.exports = router;
