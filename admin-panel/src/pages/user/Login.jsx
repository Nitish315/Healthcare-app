import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authActions";
import { reset } from "../../redux/slice/authSlice";

const Login = () => {
  const [email, setEmail] = useState("user1@user.com");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, error } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    // Prevent default form submission if wrapped in a <form>
    if (e) e.preventDefault();
    
    if (!email || !password) {
      return toast.error("Please Provide Email and Password");
    }
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (success) {
      toast.success("Login successful!");
      navigate("/home");
      dispatch(reset());
    }
    if (error) {
      toast.error(error);
      dispatch(reset());
    }
  }, [success, error, dispatch, navigate]);

  return (
    <div className="container-fluid bg-light" style={{ minHeight: "100vh" }}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-11 col-sm-8 col-md-6 col-lg-4">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body p-5">
              {/* Header Section */}
              <div className="text-center mb-4">
                <div className="bg-primary d-inline-block p-3 rounded-circle mb-3 shadow-sm">
                   <i className="bi bi-shield-lock-fill text-white fs-3"></i>
                </div>
                <h2 className="fw-bold text-dark">Admin Portal</h2>
                <p className="text-muted small">Please enter your credentials to continue</p>
              </div>

              {/* Form Section */}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-secondary small">Email Address</label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control form-control-lg bg-light border-0"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold text-secondary small">Password</label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control form-control-lg bg-light border-0"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100 fw-bold shadow-sm"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  LOGIN
                </button>
              </form>

              {/* Optional Footer Text */}
              <div className="mt-4 text-center">
                <p className="text-muted x-small mb-0">
                  Secure Server Access Only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React, { useEffect } from "react";
// import { useState } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../redux/actions/authActions";
// import { reset } from "../../redux/slice/authSlice";

// const Login = () => {
//   const [email, setEmail] = useState("user1@user.com");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     if (!email || !password) {
//       toast.error("Please Provide Email and Password");
//     }
//     dispatch(login({ email, password }));
//   };
//   const { success, error } = useSelector((state) => state.auth);
//   useEffect(() => {
//     if (success) {
//       toast.success("Login successful!");
//       navigate("/home");
//       dispatch(reset());
//     }
//     if (error) {
//       toast.error(error);
//       dispatch(reset());
//     }
//   }, [success, error, dispatch, navigate]);
//   return (
//     <>
//       <div
//         className="d-flex flex-column align-items-center justify-content-center"
//         style={{ minHeight: "80vh" }}
//       >
//         <h1>Admin Panel</h1>
//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-primary" onClick={handleLogin}>
//           LOGIN
//         </button>
//       </div>
//     </>
//   );
// };

// export default Login;
