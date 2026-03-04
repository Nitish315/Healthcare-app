import React from "react";
import { useState } from "react";
import "./Auth.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log("register ==>", name, email, password);
      toast.success("Registration successful");
      navigate("/login");
      setName("");
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
        <h2>Register</h2>
        <p>Please Enter Your Details to Register</p>
        <div className="form-group md-3">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          disabled={!name || !email || !password}
          onClick={HandleSubmit}
        >
          Register
        </button>
        <p className="mt-3">
          Already a User ?<NavLink to="/login">Login Here</NavLink>
        </p>
      </div>
      </div>
    </>
  );
};

export default Register;
