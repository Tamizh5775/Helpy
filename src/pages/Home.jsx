import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Star } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Home({ profiles }) { // Receive profiles as props
  return (
    <div className="p-6">
      <Link to="/registration">
        <Button className="mb-6">Go to Registration</Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <Card key={profile.id} className="cursor-pointer p-4 shadow-lg rounded-lg">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-2">
              <h3 className="text-lg font-semibold">{profile.name}</h3>
              <p className="text-sm text-gray-600">Reg. No: {profile.regNo}</p>
              <div className="flex items-center text-yellow-500">
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
    </div>
  );
}
