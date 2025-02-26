import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";

export default function Profile({ profiles }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find((p) => p.id.toString() === id);

  if (!profile) {
    return (
      <p className="text-center text-red-500 font-semibold">
        Profile not found
      </p>
    );
  }

  return (
    <section
      className="p-6 max-w-3xl mx-auto"
      aria-labelledby="profile-heading"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white bg-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition transform hover:scale-105 focus:ring focus:ring-blue-300"
        aria-label="Go back"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-4 text-center">
        <img
          src={profile.image || "https://via.placeholder.com/150"}
          alt={`Profile picture of ${profile.name}`}
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 mx-auto"
          loading="lazy"
        />
        <h2 id="profile-heading" className="text-2xl font-bold mt-4">
          {profile.name}
        </h2>
        <p className="text-gray-600 text-sm">Reg. No: {profile.regNo}</p>
        <p className="mt-4 text-gray-800">
          {profile.details || "No additional details available."}
        </p>

        {/* Star Rating */}
        <div className="flex justify-center items-center gap-1 mt-3 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill={i < Math.round(profile.rating) ? "#facc15" : "#d1d5db"}
              size={20}
              className="hover:scale-110 transition"
              title={`${profile.rating} Stars`}
              aria-label={`${profile.rating} out of 5 stars`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
