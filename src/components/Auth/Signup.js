import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AuthPage.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful! Redirecting to login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-image"></div> {/* Image on the left */}
      <div className="auth-form">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/login" className="switch-link">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;