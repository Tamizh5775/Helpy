import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import HelpCenter from "./pages/HelpCenter";
import About from "./pages/About";
import Registration from "./pages/Registration";

function App() {
  const [profiles, setProfiles] = useState([]); // No pre-defined profiles

  const addProfile = (newProfile) => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home profiles={profiles} />} />
          <Route path="/profile/:id" element={<Profile profiles={profiles} />} />
          <Route path="/about" element={<About />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/registration" element={<Registration addProfile={addProfile} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
