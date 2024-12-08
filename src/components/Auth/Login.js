import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authenticateUser } from "../Shared/authService";
import "./AuthPage.css";

const Login = ({ setUser, setIsAuthenticated, setUserRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = authenticateUser(email, password);
    if (user) {
      setUser(user); // Set the user in the parent component
      setIsAuthenticated(true); // Set authentication to true
      setUserRole(user.role); // Set the user role

      if (user.role === "admin") navigate("/admin/dashboard");
      else if (user.role === "instructor") navigate("/instructor/dashboard");
      else if (user.role === "student") navigate("/student/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image"></div> {/* Image on the left */}
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
        <Link to="/signup" className="switch-link">Don't have an account? Signup</Link>
      </div>
    </div>
  );
};

export default Login;
