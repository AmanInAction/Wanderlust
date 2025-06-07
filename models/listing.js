const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be positive"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findByIdAndDelete", async (listing) => {
  if (listing) {
    console.log("Deleting associated reviews:", listing.reviews);
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
