import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Listing from "./models/Listing.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

app.get("/api/listings", async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});

app.post("/api/listings", async (req, res) => {
  const listing = new Listing(req.body);
  await listing.save();
  res.json({ message: "Listing saved" });
});

app.listen(5000, () => console.log("Server running on port 5000"));