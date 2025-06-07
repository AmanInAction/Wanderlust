const Listing = require("../models/listing");
const Review = require("../models/reviews");
const mongoose = require("mongoose");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.newListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);

  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing Added!");
  res.redirect("/listings");
};

module.exports.showListings = async (req, res) => {
  try {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      req.flash("error", "Invalid listing ID!");
      return res.redirect("/listings");
    }
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: { path: "author" },
      })
      .populate("owner");

    if (!listing) {
      req.flash("error", "Listing doesn't exist!");
      return res.redirect("/listings");
    }

    // Filter out reviews with missing authors
    listing.reviews = listing.reviews.filter(
      (review) => review.author !== null
    );

    res.render("listings/show.ejs", { listing });
  } catch (err) {
    console.error("Error fetching listing:", err);
    req.flash("error", "Something went wrong!");
    res.redirect("/listings");
  }
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing doesn't Exists!");
    return res.redirect("/listings");
  }

  let orgImageUrl = listing.image.url;
  orgImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, orgImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  console.log(req.body);
  let url, filename;
  if (typeof req.file !== "undefined") {
    url = req.file.path;
    filename = req.file.filename;
    listing.image = { url, filename };

    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  if (!deletedListing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }
  if (deletedListing.reviews && deletedListing.reviews.length > 0) {
    await Review.deleteMany({ _id: { $in: deletedListing.reviews } });
  }

  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
