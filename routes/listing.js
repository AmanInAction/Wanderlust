const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.get("/", wrapAsync(listingController.index));

//New Listing Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Create Route
router.post(
  "/",
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.newListing)
);

//Show Route of all Listings
router.get("/:id", wrapAsync(listingController.showListings));

//Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.updateListing)
);

//get Route to edit a listing
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing)
);

//delete Route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.deleteListing)
);

module.exports = router;
