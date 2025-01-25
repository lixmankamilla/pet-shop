import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError("User with this email already exists.");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign up successful! Please log in.");

    navigate("/signin");
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <div className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
