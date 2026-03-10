import React from "react";
import "./User.css";

const EditUserProfile = ({ isopen, onClose }) => {
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
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="userPic"
                  height={80}
                  width={100}
                />
                <input type="file" className="form-control" />
                <input type="text" placeholder="Name" />
                <div className="d-flex flex-row">
                  <select className="form-control">
                    <option value="male" selected>
                      Male
                    </option>
                    <option value="female" selected>
                      Female
                    </option>
                  </select>
                  <input type="date" className="form-control" />
                </div>
                <input
                  type="text"
                  placeholder="Phone"
                  className="form-control"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
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
              <button type="button" className="btn btn-primary">
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
