const express = require("express");
const router = express.Router();
const { createListing, getListings } = require("../controllers/tutoringController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createListing);
router.get("/", getListings);
router.get("/mine", protect, getMyListings);


module.exports = router;
