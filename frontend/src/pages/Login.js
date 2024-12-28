import React, { useState, useEffect } from "react";
import axios from "../api/axios";

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) setUsername(savedUsername);
    }
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/token/", credentials);
      if (response.data.access) {
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("username", credentials.username);
        setIsLoggedIn(true);
        setUsername(credentials.username);
        alert("Login successful!");
      }
    } catch (error) {
      console.error(error);
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
    alert("Logged out successfully!");
  };

  return (
    <div className="container">
      <h1>Login/Logout</h1>
      {isLoggedIn ? (
        <>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
