import { is } from "date-fns/locale";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
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
      <div className="container mt-5">
        <div className="row">
          <h4 className="text-center">Manage Your Account & Appointment</h4>
          <div className="col-md-3">
            <img
              src={`data:image/jpeg;base64,${user?.image}`}
              alt="Profile"
              className="card p-2"
              width={200}
              height={250}
            />
          </div>
          <div className="col-md-8 mt-3">
            <div className="user-container mb-3">
              <h6>Name:{user?.name}</h6>
              <h6>Gender:{user?.gender || "NA"}</h6>
              <h6>DOB:{user?.dob || "NA"}</h6>
              <h6>Email:{user?.email}</h6>
              <h6>Phone:{user?.phone || "NA"}</h6>
              <h6>Address:{user?.address || "NA"}</h6>
            </div>
            <div className="button-container mt-5">
              <button
                className="btn btn-warning"
                onClick={() => setIsOpen(!isopen)}
              >
                <i className="fa-solid fa-pen-to-square"></i>Edit Profile
              </button>
              <button
                className="btn btn-primary ms-3"
                onClick={() => navigate("/user/appointments")}
              >
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
