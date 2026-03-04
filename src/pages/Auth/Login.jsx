import React from 'react'
import { useState } from "react";
import "./Auth.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log("login ==>", email, password);
      toast.success("login successful");
      navigate("/profile");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Error in Register", error);
      toast.error(error);
    }
  };
  return (
    <>
      <div className="auth-container">
        <div className="card">
        <h2>Login</h2>
        <p>Please Enter Your Email & Password</p>
        <div className="form-group md-3">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group md-3">
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={!email || !password}
          onClick={HandleSubmit}
        >
          LOGIN
        </button>
        <p className="mt-3">
          Not a User?<NavLink to="/register">Register Here</NavLink>
        </p>
      </div>
      </div>
    </>
  );
};

export default Login
