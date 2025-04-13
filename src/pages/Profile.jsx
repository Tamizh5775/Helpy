import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";

export default function Profile({ profiles }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find((p) => p.id.toString() === id);

  if (!profile) {
    return (
      <div className="container text-center mt-5">
        <p className="text-danger fs-5 fw-semibold">Profile not found</p>
      </div>
    );
  }

  return (
    <div className="container d-flex flex-column align-items-center py-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline-secondary mb-3 d-flex align-items-center"
      >
        <ArrowLeft className="me-2" size={18} /> Back
      </button>

      {/* Profile Card */}
      <div
        className="card shadow-lg border-0 rounded-3 p-4 text-center w-100"
        style={{ maxWidth: "500px" }}
      >
        <div className="position-relative mx-auto">
          {/* Profile Image */}
          <img
            src={profile.image || "https://via.placeholder.com/150"}
            alt={`Profile of ${profile.name}`}
            className="rounded-circle border border-3 border-secondary shadow-sm img-fluid"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
          {/* Availability Indicator */}
          <span
            className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle"
            style={{ width: "15px", height: "15px" }}
          ></span>
        </div>

        {/* Profile Name & Details */}
        <h2 className="mt-3 fw-bold text-dark">{profile.name}</h2>
        <p className="text-muted mb-2">
          Reg. No: {profile.regNo ? profile.regNo : "N/A"}
        </p>
        <p className="text-secondary fst-italic">
          {profile.details || "No additional details available."}
        </p>

        {/* Star Ratings */}
        <div className="d-flex justify-content-center mt-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill={i < Math.floor(profile.rating || 0) ? "#facc15" : "#d1d5db"}
              className="mx-1"
              size={24}
              title={`${profile.rating || 0} Stars`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
