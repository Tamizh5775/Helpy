import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Servents({ profiles = [] }) {
  if (!profiles.length) {
    return (
      <div className="text-center p-6">
        <h3 className="text-muted">No profiles available.</h3>
      </div>
    );
  }

  return (
    <div className="p-6 container">
      <div className="row g-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="col-12 col-sm-6 col-md-3">
            <div className="card h-100 shadow-sm">
              <img
                src={profile.image}
                className="card-img-top"
                alt={profile.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{profile.name}</h5>
                <p className="card-text text-muted">Reg No: {profile.regNo}</p>
                <Link to={`/profile/${profile.id}`} className="mt-auto">
                  <Button className="w-100 bg-primary text-white hover:bg-blue-600">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
