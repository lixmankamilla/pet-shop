import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.scss";

const SignIn = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    alert("Sign in successful!");
    navigate("/");
  };
  return (
    <div className="signin-page">
      <form className="signin-form" onSubmit={handleSignIn}>
        <h2>Sign In</h2>
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
        <button type="submit" className="signin-button">
          Sign In
        </button>
        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
