const express = require("express");
const { route } = require("./listing");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users");

//Signup Route
router.get("/signup", userController.renderSignupPage);

//Register Route
router.post("/signup", wrapAsync(userController.registerUser));

//login Page
router.get("/login", userController.renderLogin);

//login
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

//logout
router.get("/logout", userController.logoutUser);
module.exports = router;
