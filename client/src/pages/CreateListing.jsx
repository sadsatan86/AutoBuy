import React, { useState } from "react";
import axios from "axios";

export default function CreateListing() {
  const [form, setForm] = useState({ title: "", price: "", location: "", image: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/listings", form);
    alert("Listing created!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Listing</h2>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          type="text"
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          className="block w-full p-2 border mb-2 rounded"
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}