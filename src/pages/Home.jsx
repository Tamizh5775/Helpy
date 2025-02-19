import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home({ profiles }) {
  return (
    <div className="p-6 container">
      <Link to="/registration">
        <Button className="mb-6 btn btn-primary">Go to Registration</Button>
      </Link>

      <div className="row">
        {profiles.map((profile) => (
          <div key={profile.id} className="col-12 col-sm-6 col-md-3">
            <Link
              to={`/profile/${profile.id}`}
              className="text-decoration-none"
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={profile.image}
                  className="card-img-top"
                  alt={profile.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{profile.name}</h5>
                  <p className="card-text">Reg No: {profile.regNo}</p>
                  <Button className="btn btn-primary">View Profile</Button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
