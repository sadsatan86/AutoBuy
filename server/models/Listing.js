import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  location: String,
});

export default mongoose.model("Listing", listingSchema);