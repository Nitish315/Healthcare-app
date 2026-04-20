import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../redux/actions/authActions";
import toast from "react-hot-toast";
import { logout, reset } from "../../redux/slice/authSlice";

const ResetPassword = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { success, error } = useSelector((state) => state.auth);

  const handleResetPassword = () => {
    if (!oldPassword || !newPassword) {
      return toast.error("Please Provide Old and New Password");
    }
    dispatch(resetPassword({ id, oldPassword, newPassword }));
    
      if (error) {
      toast.error(error);
      dispatch(reset());
    }
    if (success) {
      toast.success("Your Password Reset Please Login Again");
      navigate("/login");
      dispatch(logout());
      dispatch(reset());
    }
  };

  
  useEffect(() => {
  
  }, [dispatch, success, navigate, error]);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <h1>Reset Your Password</h1>
      <div className="md-3">
        <label htmlFor="" className="me-3">
          Enter Your Old Password
        </label>
        <input
          type="text"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="md-3">
        <label htmlFor="" className="me-3">
          Enter Your New Password
        </label>
        <input
          type="text"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" onClick={handleResetPassword}>
        RESET PASSWORD
      </button>
    </div>
  );
};

export default ResetPassword;
