import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './FacultyDashboard.css'; // Import the CSS file

const InstructorNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform your logout logic (e.g., clearing localStorage, making API call, etc.)
    localStorage.removeItem("userToken"); // Example for clearing user token
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Faculty Portal</h1>
      </div>
      <div className="navbar-links">
        <Link to="/instructor/dashboard">Dashboard</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default InstructorNavbar;
