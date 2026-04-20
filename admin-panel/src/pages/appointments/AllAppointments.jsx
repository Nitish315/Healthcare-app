import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAppointments } from "../../redux/actions/appointmentAction";

const AllAppointments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);

  const { appointments } = useSelector((state) => state.appointments);

  // Helper to determine status badge colors
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "completed": return "bg-success";
      case "pending": return "bg-warning text-dark";
      case "cancelled": return "bg-danger";
      default: return "bg-secondary";
    }
  };

  return (
    <Layout>
      <div className="container py-4">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold text-dark">Appointment Records</h2>
            <p className="text-muted small mb-0">Monitor and manage all scheduled patient visits</p>
          </div>
          <div className="text-end">
            <div className="h4 fw-bold mb-0 text-primary">{appointments?.length || 0}</div>
            <small className="text-uppercase text-muted fw-semibold">Total Bookings</small>
          </div>
        </div>

        {/* Table Card */}
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light text-secondary">
                  <tr>
                    <th className="ps-4 py-3">#</th>
                    <th>APPOINTMENT ID</th>
                    <th>SCHEDULED DATE</th>
                    <th>BILLING</th>
                    <th>STATUS</th>
                    <th className="text-end pe-4">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments && appointments.length > 0 ? (
                    appointments.map((a, i) => (
                      <tr key={a?._id || i}>
                        <td className="ps-4 text-muted small">{i + 1}</td>
                        <td>
                          <span className="font-monospace text-primary fw-medium">
                            #{a?._id?.slice(-8).toUpperCase()}
                          </span>
                        </td>
                        <td>
                          <div className="fw-semibold">{a?.slotDate}</div>
                        </td>
                        <td>
                          <span className="fw-bold text-dark">${a?.amount}</span>
                        </td>
                        <td>
                          <span className={`badge rounded-pill px-3 py-2 ${getStatusBadge(a?.status)}`}>
                            {a?.status || "Unknown"}
                          </span>
                        </td>
                        <td className="text-end pe-4">
                          <Link 
                            to={`/appointments-details/${a?._id}`}
                            className="btn btn-sm btn-light border text-primary fw-bold px-3 hover-shadow"
                          >
                            Edit / View
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-5">
                        <div className="text-muted">
                          <i className="bi bi-calendar-x fs-2 d-block mb-2"></i>
                          No appointments found in the system.
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllAppointments;

// import React, { useEffect } from "react";
// import Layout from "../../components/Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getAllAppointments } from "../../redux/actions/appointmentAction";

// const AllAppointments = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllAppointments());
//   }, [dispatch]);

//   const { appointments } = useSelector((state) => state.appointments);
//   return (
//     <Layout>
//       <h1>All Appointments</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>SNO</th>
//             <th>ID</th>
//             <th>DATE</th>
//             <th>AMOUNT</th>
//             <th>STATUS</th>
//             {/* <th>PAYMENT</th> */}
//             <th>Details/Edit</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments?.map((a, i) => (
//             <tr key={i + 1}>
//               <td>{i + 1}</td>
//               <td>{a?._id}</td>
//               <td>{a?.slotDate}</td>
//               <td>{a?.amount}</td>
//               <td>{a?.status}</td>
//               {/* <td>{a?.payment}</td> */}
//               <td>
//                 <Link to={`/appointments-details/${a?._id}`}>More Details</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Layout>
//   );
// };

// export default AllAppointments;
