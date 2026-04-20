import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/slice/authSlice";

const Menus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    localStorage.removeItem("appData");
    navigate("/");
  };

  const getLinkClass = ({ isActive }) => 
    `nav-link d-flex align-items-center py-3 px-4 mb-2 mx-3 rounded-3 transition-all ${
      isActive 
        ? "bg-white text-primary shadow fw-bold" 
        : "text-secondary hover-link fw-medium"
    }`;

  return (
    <div className="d-flex flex-column h-100 shadow-lg" 
         style={{ backgroundColor: "#111827", minHeight: "100vh" }}>
      
      {/* Brand Section */}
      <div className="p-4 mb-4 mt-2">
        <h4 className="text-white fw-bold mb-0 d-flex align-items-center gap-2">
          <span className="bg-primary rounded-circle" style={{ width: '12px', height: '12px' }}></span>
          Admin<span className="text-primary">Panel</span>
        </h4>
      </div>

      {/* Navigation - Better Spacing */}
      <div className="flex-grow-1">
        <nav className="nav flex-column">
          <NavLink to="/home" className={getLinkClass}>
            HOME
          </NavLink>
          <NavLink to="/all-users" className={getLinkClass}>
            USERS
          </NavLink>
          <NavLink to="/all-doctors" className={getLinkClass}>
            DOCTORS
          </NavLink>
          <NavLink to="/all-appointments" className={getLinkClass}>
            APPOINTMENTS
          </NavLink>
        </nav>
      </div>

      {/* Logout - Floating at Bottom */}
      <div className="p-4 border-top border-secondary border-opacity-10">
        <button 
          className="btn btn-danger w-100 py-2 fw-bold shadow-sm"
          onClick={handleLogout}
          style={{ borderRadius: "10px" }}
        >
          LOGOUT
        </button>
      </div>

      <style>{`
        .transition-all { transition: all 0.2s ease-in-out; }
        .text-secondary { color: #9ca3af !important; }
        .hover-link:hover {
          color: #ffffff !important;
          background-color: rgba(255, 255, 255, 0.05);
        }
        .nav-link { font-size: 0.85rem; letter-spacing: 0.5px; }
      `}</style>
    </div>
  );
};

export default Menus;

// import React from "react";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { logout } from "../../redux/slice/authSlice";

// const Menus = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleLayout = () => {
//     dispatch(logout())
//     toast.success("Logout Successfully");
//     localStorage.removeItem("appData")
//     navigate("/");
//   };
//   return (
//     <div className="d-flex flex-column ">
//       <ul
//         className="nav d-flex flex-column justify-content-center"
//         style={{ minHeight: "100vh" }}
//       >
//         <h2>Admin Panel</h2>
//         <li className="nav-item">
//           <NavLink className="nav-link" to={"/home"}>
//             Home
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to={"/all-users"}>
//             USERS
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to={"/all-doctors"}>
//             DOCTORS
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to={"/all-appointments"}>
//             APPOINTMENTS
//           </NavLink>
//         </li>
//         <div className="btn btn-danger m-3" onClick={handleLayout}>
//           LOGOUT
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Menus;
