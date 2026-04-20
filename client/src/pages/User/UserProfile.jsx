import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import EditUserProfile from "./EditUserProfile";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import { getLoginUserDetails } from "../../redux/actions/authActions";

const UserProfile = () => {
  const navigate = useNavigate();
  const [isopen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const localData = localStorage.getItem("appData");
    const appData = JSON.parse(localData);
    if (appData) {
      const id = appData?.user?._id;
      dispatch(getLoginUserDetails(id));
    }
  }, [dispatch]);

  const handlelogout = () => {
    dispatch(logout());
    localStorage.removeItem("appData");
    navigate("/login");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Card Container */}
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="card-header bg-primary text-white py-3">
                <h4 className="mb-0 text-center fw-bold">
                  Manage Your Account & Appointments
                </h4>
              </div>
              
              <div className="card-body p-4 p-md-5">
                <div className="row align-items-center">
                  {/* Profile Image Section */}
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <div className="position-relative d-inline-block">
                      <img
                        src={`data:image/jpeg;base64,${user?.image}`}
                        alt="Profile"
                        className="img-thumbnail rounded-circle shadow-sm"
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                          border: "5px solid #f8f9fa"
                        }}
                      />
                    </div>
                  </div>

                  {/* User Details Section */}
                  <div className="col-md-8">
                    <div className="user-info-grid border-bottom pb-3 mb-3">
                      <div className="row mb-2">
                        <div className="col-sm-4 fw-bold text-muted">Full Name:</div>
                        <div className="col-sm-8 text-dark">{user?.name}</div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-4 fw-bold text-muted">Gender:</div>
                        <div className="col-sm-8 text-dark">{user?.gender || "NA"}</div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-4 fw-bold text-muted">Date of Birth:</div>
                        <div className="col-sm-8 text-dark">{user?.dob || "NA"}</div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-4 fw-bold text-muted">Email Address:</div>
                        <div className="col-sm-8 text-dark">{user?.email}</div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-4 fw-bold text-muted">Phone Number:</div>
                        <div className="col-sm-8 text-dark">{user?.phone || "NA"}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <Link 
                        to={`/user/reset-password/${user?._id}`} 
                        className="btn btn-sm btn-outline-secondary text-decoration-none"
                      >
                        <i className="fa-solid fa-key me-2"></i>Reset Password
                      </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex flex-wrap gap-2 justify-content-start">
                      <button
                        className="btn btn-warning px-4 fw-semibold shadow-sm"
                        onClick={() => setIsOpen(!isopen)}
                      >
                        <i className="fa-solid fa-pen-to-square me-2"></i>Edit Profile
                      </button>
                      
                      <button
                        className="btn btn-primary px-4 fw-semibold shadow-sm"
                        onClick={() => navigate("/user/appointments")}
                      >
                        <i className="fa-solid fa-calendar-check me-2"></i>Appointments
                      </button>
                      
                      <button 
                        className="btn btn-danger px-4 fw-semibold shadow-sm" 
                        onClick={handlelogout}
                      >
                        <i className="fa-solid fa-right-from-bracket me-2"></i>Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isopen && (
        <EditUserProfile isopen={isopen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
// import { is } from "date-fns/locale";
// import React, { useEffect } from "react";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import EditUserProfile from "./EditUserProfile";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../redux/slice/authSlice";
// import { getLoginUserDetails } from "../../redux/actions/authActions";
// const UserProfile = () => {
//   const navigate = useNavigate();
//   const [isopen, setIsOpen] = React.useState(false);
//   const dispatch = useDispatch();

//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     const localData = localStorage.getItem("appData");
//     const appData = JSON.parse(localData);
//     if (appData) {
//       const id = appData?.user?._id;
//       dispatch(getLoginUserDetails(id));
//     }
//   }, [dispatch]);
//   const handlelogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("appData");
//     navigate("/login");
//     toast.success("Logout Successfully");
//   };

//   return (
//     <>
//       <div className="container mt-5">
//         <div className="row">
//           <h4 className="text-center">Manage Your Account & Appointment</h4>
//           <div className="col-md-3">
//             <img
//               src={`data:image/jpeg;base64,${user?.image}`}
//               alt="Profile"
//               className="card p-2"
//               width={200}
//               height={250}
//             />
//           </div>
//           <div className="col-md-8 mt-3">
//             <div className="user-container mb-3">
//               <h6>Name:{user?.name}</h6>
//               <h6>Gender:{user?.gender || "NA"}</h6>
//               <h6>DOB:{user?.dob || "NA"}</h6>
//               <h6>Email:{user?.email}</h6>
//               <h6>Phone:{user?.phone || "NA"}</h6>
//               <h4>
//                 <Link to={`/user/reset-password/${user?._id}`}>
//                   Reset Password
//                 </Link>
//               </h4>
//             </div>
//             <div className="button-container mt-5">
//               <button
//                 className="btn btn-warning"
//                 onClick={() => setIsOpen(!isopen)}
//               >
//                 <i className="fa-solid fa-pen-to-square"></i>Edit Profile
//               </button>
//               <button
//                 className="btn btn-primary ms-3"
//                 onClick={() => navigate("/user/appointments")}
//               >
//                 <i className="fa-solid fa-list"></i> Appointment
//               </button>
//               <button className="btn btn-danger ms-3" onClick={handlelogout}>
//                 <i className="fa-solid fa-power-off"></i>LOGOUT
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* {edit Model} */}
//       {isopen && (
//         <EditUserProfile isopen={isopen} onClose={() => setIsOpen(false)} />
//       )}
//     </>
//   );
// };

// export default UserProfile;
