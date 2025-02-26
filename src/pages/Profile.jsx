import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";

export default function Profile({ profiles }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find((p) => p.id.toString() === id);

  if (!profile) {
    return (
      <p className="text-center text-red-500 text-lg">Profile not found</p>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-700 hover:text-gray-900 transition-all duration-300 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back
      </button>

      {/* Profile Card */}
      <div className="bg-white shadow-2xl rounded-lg p-8 text-center w-full max-w-2xl transform hover:scale-105 transition-transform duration-300">
        <div className="relative inline-block">
          <img
            src={profile.image || "https://via.placeholder.com/150"}
            alt={`Profile picture of ${profile.name}`}
            className="w-36 h-36 object-cover rounded-full border-4 border-gray-300 mx-auto shadow-md"
          />
          <span className="absolute bottom-2 right-2 bg-green-400 w-4 h-4 rounded-full border-2 border-white"></span>
        </div>
        <h2 className="text-3xl font-semibold mt-4 text-gray-800">
          {profile.name}
        </h2>
        <p className="text-gray-500 text-lg">
          Reg. No: {profile.registrationNumber || "N/A"}
        </p>

        {/* Profile Details */}
        <p className="mt-4 text-gray-700 text-md leading-relaxed px-4">
          {profile.details || "No additional details available."}
        </p>

        {/* Star Ratings */}
        <div className="flex justify-center mt-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill={i < Math.floor(profile.rating || 0) ? "#facc15" : "#d1d5db"}
              className={`w-6 h-6 transition-all duration-300 ${
                i < Math.floor(profile.rating || 0)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              aria-hidden="true"
              title={`${profile.rating || 0} Stars`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
