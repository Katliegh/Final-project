const mongoose = require("mongoose");

const textbookListingSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  imageUrl: String,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sold: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TextbookListing", textbookListingSchema);
