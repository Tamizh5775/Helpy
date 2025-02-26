import React from "react";
import Servents from "./Servents";

export default function Home({ profiles = [] }) {
  return (
    <div className="container py-4">
      <h2 className="text-center fw-bold mb-4">Welcome to Our Platform</h2>
      <p className="text-center text-muted">
        Explore our list of available profiles below.
      </p>
      <Servents profiles={profiles} />
    </div>
  );
}
