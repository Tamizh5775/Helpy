import React from "react";
import { Card } from "./card";
import { Star } from "lucide-react";

export default function ProfileCard({ profile }) {
  return (
    <Card className="cursor-pointer p-4 shadow-lg rounded-lg transition-transform hover:scale-105">
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
            <Star key={i} fill={i < Math.round(profile.rating) ? "#facc15" : "#d1d5db"} />
          ))}
        </div>
      </div>
    </Card>
  );
}
