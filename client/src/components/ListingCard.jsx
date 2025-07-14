import React from "react";

export default function ListingCard({ title, price, image, location }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-2" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-green-600 font-bold">${price}</p>
      <p className="text-gray-500">{location}</p>
    </div>
  );
}