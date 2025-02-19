import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import ProfileCard from "../components/ui/ProfileCard";

export default function Home({ profiles }) {
  return (
    <div className="p-6">
      <Link to="/registration">
        <Button className="mb-6">Go to Registration</Button>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <Link key={profile.id} to={`/profile/${profile.id}`}>
            <ProfileCard profile={profile} />
          </Link>
        ))}
      </div>
    </div>
  );
}
