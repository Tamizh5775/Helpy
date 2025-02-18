import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = ({ addProfile }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    regNo: "",
    rating: 0,
    image: "",
    details: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(newProfile); // Add new profile to the profiles array
    navigate("/"); // Redirect to Home page after registration
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Register a New Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newProfile.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="regNo"
          value={newProfile.regNo}
          onChange={handleInputChange}
          placeholder="Registration Number"
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="image"
          value={newProfile.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="form-control mb-2"
          required
        />
        <textarea
          name="details"
          value={newProfile.details}
          onChange={handleInputChange}
          placeholder="Details"
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-primary">
          Register Profile
        </button>
      </form>
    </div>
  );
};

export default Registration;
