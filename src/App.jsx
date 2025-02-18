import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import HelpCenter from "./pages/HelpCenter";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/help-center" element={<HelpCenter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
