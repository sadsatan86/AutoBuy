import React, { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "../components/ListingCard";

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/listings").then((res) => setListings(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">AutoBuy Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {listings.map((listing) => (
          <ListingCard key={listing._id} {...listing} />
        ))}
      </div>
    </div>
  );
}