import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Star, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home({ profiles }) {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const openProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const closeProfile = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="p-6">
      <Link to="/registration">
        <Button className="mb-6">Go to Registration</Button>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <Card
            key={profile.id}
            className="cursor-pointer p-4 shadow-lg rounded-lg transition-transform hover:scale-105"
            onClick={() => openProfile(profile)}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-2 text-center">
              <h3 className="text-lg font-semibold">{profile.name}</h3>
              <p className="text-sm text-gray-600">Reg. No: {profile.regNo}</p>
              <div className="flex justify-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill={i < Math.round(profile.rating) ? "#facc15" : "#d1d5db"}
                  />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedProfile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeProfile}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg relative transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeProfile}
            >
              <X />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 flex justify-center">
                <img
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
                />
              </div>

              <div className="md:w-2/3 mt-4 md:mt-0 md:pl-4">
                <h2 className="text-xl font-bold text-center md:text-left">
                  {selectedProfile.name}
                </h2>
                <p className="text-gray-600 text-center md:text-left">
                  Reg. No: {selectedProfile.regNo}
                </p>
                <p className="mt-2 text-gray-800 text-center md:text-left">
                  {selectedProfile.details}
                </p>
                <div className="flex justify-center md:justify-start text-yellow-500 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill={i < Math.round(selectedProfile.rating) ? "#facc15" : "#d1d5db"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
