const TutoringListing = require("../models/TutoringListing");

exports.createListing = async (req, res) => {
  const { title, description, subject, pricePerHour } = req.body;
  try {
    const listing = new TutoringListing({
      title,
      description,
      subject,
      pricePerHour,
      createdBy: req.user.userId
    });
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getListings = async (req, res) => {
  const listings = await TutoringListing.find().populate("createdBy", "name");
  res.json(listings);
};
