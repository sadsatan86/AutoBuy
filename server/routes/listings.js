const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// GET all listings
router.get('/', async (req, res) => {
  const listings = await Listing.find().sort({ createdAt: -1 });
  res.json(listings);
});

// POST a new listing
router.post('/', async (req, res) => {
  const newListing = new Listing(req.body);
  await newListing.save();
  res.status(201).json(newListing);
});

module.exports = router;
