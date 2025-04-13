import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import HelpCenter from "./pages/HelpCenter";
import About from "./pages/About";
import Registration from "./pages/Registration";
import Userinfo from "./pages/Userinfo";

function App() {
  const [profiles, setProfiles] = useState(() => {
    try {
      const savedProfiles = localStorage.getItem("profiles");
      return savedProfiles ? JSON.parse(savedProfiles) : [];
    } catch (error) {
      console.error("Error loading profiles from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  const addProfile = (newProfile) => {
    setProfiles((prevProfiles) => [
      ...prevProfiles,
      { ...newProfile, id: uuidv4() }, // Unique ID
    ]);
  };

  return (
    <>
      <Router>
        <Navbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home profiles={profiles} />} />
            <Route
              path="/profile/:id"
              element={<Profile profiles={profiles} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route
              path="/registration"
              element={<Registration addProfile={addProfile} />}
            />
            <Route path="/userinfo" element={<Userinfo />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
