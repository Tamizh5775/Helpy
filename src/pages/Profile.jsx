import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

export default function Profile({ profiles }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find((p) => p.id.toString() === id);

  if (!profile) {
    return <p className="text-center text-red-500">Profile not found</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 mb-4 underline"
      >
        Back
      </button>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 mx-auto"
        />
        <h2 className="text-2xl font-bold text-center mt-4">{profile.name}</h2>
        <p className="text-center text-gray-600">Reg. No: {profile.regNo}</p>
        <p className="mt-4 text-gray-800">{profile.details}</p>
        <div className="flex justify-center text-yellow-500 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill={i < Math.round(profile.rating) ? "#facc15" : "#d1d5db"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
