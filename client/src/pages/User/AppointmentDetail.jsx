import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AppointmentDetail = () => {
  const { id } = useParams();

  const { appointments } = useSelector((state) => state.auth);

  const appointment = appointments?.find((a) => a._id === id);

  // 🔥 Universal image handler
  const getDoctorImage = () => {
    const img = appointment?.doctorId?.image;

    if (!img) return "https://via.placeholder.com/150";

    // already base64 with prefix
    if (img.startsWith("data:image")) return img;

    // normal URL
    if (img.startsWith("http")) return img;

    // base64 without prefix
    return `data:image/jpeg;base64,${img}`;
  };

  return (
    <div className="container py-5">

      <div className="text-center mb-4">
        <h2 className="fw-bold">Appointment Details</h2>
      </div>

      <div className="card shadow border-0 p-4">
        {appointment ? (
          <div className="row align-items-center">

            {/* Doctor Info */}
            <div className="col-md-4 text-center mb-3">

              <img
                src={getDoctorImage()}
                alt="doctor"
                className="img-fluid rounded-circle mb-3 border"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />

              <h5>{appointment?.doctorId?.name || "Doctor Name"}</h5>
              <p className="text-muted">
                {appointment?.doctorId?.Degree || "Specialist"}
              </p>
            </div>

            {/* Details */}
            <div className="col-md-8">

              <div className="mb-2">
                <strong>Date:</strong>{" "}
                <span className="text-muted">{appointment?.slotDate}</span>
              </div>

              <div className="mb-2">
                <strong>Time:</strong>{" "}
                <span className="text-muted">{appointment?.slotTime}</span>
              </div>

              <div className="mb-2">
                <strong>Fees:</strong>{" "}
                <span className="text-muted">₹{appointment?.amount}</span>
              </div>

              <div className="mb-3">
                <strong>Status:</strong>{" "}
                <span
                  className={`badge ${
                    appointment?.status === "pending"
                      ? "bg-warning text-dark"
                      : appointment?.status === "approved"
                      ? "bg-success"
                      : "bg-danger"
                  }`}
                >
                  {appointment?.status}
                </span>
              </div>

              <hr />

              {/* Patient Info */}
              <h6 className="fw-bold">Patient Info</h6>

              <p>
                <strong>Name:</strong>{" "}
                {appointment?.userId?.name || "N/A"}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {appointment?.userId?.phone || "N/A"}
              </p>

              <p>
                <strong>Address:</strong>{" "}
                {appointment?.userId?.address || "N/A"}
              </p>

            </div>

          </div>
        ) : (
          <div className="text-center text-muted py-4">
            No Appointment Found
          </div>
        )}
      </div>

    </div>
  );
};

export default AppointmentDetail;