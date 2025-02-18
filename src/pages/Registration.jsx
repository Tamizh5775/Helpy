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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size must be less than 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfile((prevProfile) => ({
          ...prevProfile,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProfile.name || !newProfile.regNo || !newProfile.details) {
      alert("Please fill in all required fields.");
      return;
    }
    if (isNaN(newProfile.rating) || newProfile.rating < 0 || newProfile.rating > 5) {
      alert("Please enter a valid rating between 0 and 5.");
      return;
    }
    addProfile(newProfile);
    navigate("/");
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
          type="file"
          name="image"
          onChange={handleImageChange}
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

      {newProfile.image && (
        <div className="mt-3">
          <h5>Image Preview:</h5>
          <img src={newProfile.image} alt="Preview" width="100" style={{ objectFit: "cover" }} />
        </div>
      )}
    </div>
  );
};

export default Registration;
