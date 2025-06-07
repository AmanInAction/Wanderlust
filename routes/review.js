const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");
const reviewController = require("../controllers/reviews.js");

const { validateReview, isLoggedIn } = require("../middleware.js");

//Reviews
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.addReview)
);

//Delete Review
router.delete(
  "/:reviewId",
  isLoggedIn,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
