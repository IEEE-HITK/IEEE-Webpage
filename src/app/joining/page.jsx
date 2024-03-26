"use client"
import React, { useState } from "react";
import Back from "@com/back/Back";
import "./JoinIeee.css"; // Import CSS for styling
import Awrapper from "../about/Awrapper";

const JoinIeee = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data - you can implement your logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <Back title="Explore Courses" />
      <div className="join-container">
        <h1>Join IEEE</h1>
        <p className="text-center">
          Interacting with the world of technology is not just about knowing how
          to use tools, but also understanding why they work. That’s what we do
          at IEEE – we don't just
        </p>
        {/* Joining form */}
        <form className="join-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your Phone"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows={4}
          ></textarea>
          <button type="submit">Join IEEE</button>
        </form>
      </div>
    </>
  );
};

export default JoinIeee;
