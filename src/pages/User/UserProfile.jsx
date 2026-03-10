import { is } from "date-fns/locale";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import EditUserProfile from "./EditUserProfile";
const UserProfile = () => {
  const navigate = useNavigate();
  const [isopen, setIsOpen] = React.useState(false);
  const handlelogout = () => {
    navigate("/login");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h4 className="text-center">Manage Your Account & Appointment</h4>
          <div className="col-md-3">
            <img src="" alt="Profile" className="card p-2" width={200} />
          </div>
          <div className="col-md-8 mt-3">
            <div className="user-container mb-3">
              <h6>Name:</h6>
              <h6>Gender:</h6>
              <h6>DOB:</h6>
              <h6>Email:</h6>
              <h6>Phone:</h6>
              <h6>Address:</h6>
            </div>
            <div className="button-container mt-5">
              <button
                className="btn btn-warning"
                onClick={() => setIsOpen(!isopen)}
              >
                <i className="fa-solid fa-pen-to-square"></i>Edit Profile
              </button>
              <button className="btn btn-primary ms-3">
                <i className="fa-solid fa-list"></i> Appointment
              </button>
              <button className="btn btn-danger ms-3" onClick={handlelogout}>
                <i className="fa-solid fa-power-off"></i>LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {edit Model} */}
      {isopen && (
        <EditUserProfile isopen={isopen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
