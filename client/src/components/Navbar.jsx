import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">AutoBuy</Link>
      <Link to="/create" className="hover:underline">Create Listing</Link>
    </nav>
  );
}