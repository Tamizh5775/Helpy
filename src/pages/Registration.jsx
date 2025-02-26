import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = ({ addProfile }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    regNo: "",
    rating: "",
    image: "",
    details: "",
  });

  const [loadingImage, setLoadingImage] = useState(false);
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

      setLoadingImage(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfile((prevProfile) => ({
          ...prevProfile,
          image: reader.result,
        }));
        setLoadingImage(false);
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
    const ratingValue = parseFloat(newProfile.rating);
    if (isNaN(ratingValue) || ratingValue < 0 || ratingValue > 5) {
      alert("Please enter a valid rating between 0 and 5.");
      return;
    }

    addProfile({ ...newProfile, rating: ratingValue.toFixed(1) });
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4 text-primary">Register Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={newProfile.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Registration Number</label>
            <input
              type="text"
              name="regNo"
              value={newProfile.regNo}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter registration number"
              pattern="[0-9]{4,}"
              title="Enter at least 4 numeric digits"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Rating (0-5)</label>
            <input
              type="number"
              name="rating"
              value={newProfile.rating}
              onChange={handleInputChange}
              className="form-control"
              min="0"
              max="5"
              step="0.1"
              placeholder="Enter rating (optional)"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image Upload</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Details</label>
            <textarea
              name="details"
              value={newProfile.details}
              onChange={handleInputChange}
              className="form-control"
              rows="3"
              placeholder="Enter details"
              required
            ></textarea>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Register
            </button>
          </div>
        </form>
        {loadingImage && (
          <p className="text-center text-secondary">Loading image...</p>
        )}
        {newProfile.image && !loadingImage && (
          <div className="mt-3 text-center">
            <h5 className="text-secondary">Image Preview</h5>
            <img
              src={newProfile.image}
              alt="Preview"
              className="img-thumbnail rounded"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
