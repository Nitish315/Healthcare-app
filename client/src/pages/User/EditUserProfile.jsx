import React, { useEffect, useState } from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  getLoginUserDetails,
  getUserData,
  updateUserData,
} from "../../redux/actions/authActions";
import { reset } from "../../redux/slice/authSlice";
import toast from "react-hot-toast";

const EditUserProfile = ({ isopen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(getLoginUserDetails());
    dispatch(reset());
  }, [dispatch]);

  const { user, success, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setPhone(user?.phone || "");
      setGender(user?.gender || "");
      setAddress(user?.address || "");
      setImage(user?.image || "");
    }
  }, [user]);

  //handle update
  const handleUpdate = (id) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("gender", gender);
    dispatch(reset());
    dispatch(updateUserData({ id, formData }));
  };

  useEffect(() => {
    if (success) {
      toast.success("user Updated");
      // dispatch(getLoginUserDetails())
      dispatch(reset());
      onClose();
    }
    if (error) {
      toast.error(error);
    }
  }, [dispatch, success, error, onClose]);

  if (!isopen) return null;
  return (
    <>
      <div className="editModel modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Your Profile</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mod-details-flex d-flex flex-column gap-2">
                <img
                  src={`data:image/jpeg;base64,${user?.image}`}
                  alt="userPic"
                  height={80}
                  width={100}
                />
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="d-flex flex-row">
                  <select
                    className="m-1"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="male" selected>
                      Male
                    </option>
                    <option value="female" selected>
                      Female
                    </option>
                  </select>
                  {/* <input type="date" className="form-control" /> */}
                </div>
                <input
                  type="text"
                  placeholder="Phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleUpdate(user?._id)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserProfile;
