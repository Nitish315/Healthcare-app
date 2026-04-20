import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelStatus,
  getAllAppointments,
} from "../../redux/actions/authActions";
import { reset } from "../../redux/slice/authSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyAppointment = () => {
  const dispatch = useDispatch();

  const { appointments, error, success } = useSelector(
    (state) => state.auth
  );

  const handleCancel = (id) => {
    dispatch(cancelStatus(id));
  };

  useEffect(() => {
    const localData = localStorage.getItem("appData");
    const appData = JSON.parse(localData);

    if (appData) {
      const id = appData?.user?._id;
      dispatch(getAllAppointments(id));
      dispatch(reset());
    }
  }, [dispatch]);

  // Handle success/error (important fix)
  useEffect(() => {
    if (success) {
      toast.success("Cancelled Successfully");
      dispatch(reset());
      // window.location.reload();
    }

    if (error) {
      toast.error(error);
    }
  }, [success, error, dispatch]);

  return (
    <>
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">My Appointments</h2>
          <p className="text-muted">
            Manage your bookings and view appointment details
          </p>
        </div>

        {/* Table Card */}
        <div className="card shadow-sm border-0">
          <div className="card-body">

            <div className="table-responsive">
              <table className="table table-hover align-middle text-center">

                <thead className="table-primary">
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Fees</th>
                    <th>Status</th>
                    <th>Details</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {appointments?.length > 0 ? (
                    appointments.map((a, i) => (
                      <tr key={i + 1}>
                        <td>{i + 1}</td>

                        <td>
                          <span className="badge bg-light text-dark">
                            {a?.slotDate}
                          </span>
                        </td>

                        <td>₹{a?.amount}</td>

                        <td>
                          <span
                            className={`badge ${
                              a?.status === "pending"
                                ? "bg-warning text-dark"
                                : a?.status === "approved"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {a?.status}
                          </span>
                        </td>

                        <td>
                          <Link
                            to={`/user/appointments/${a?._id}`}
                            className="btn btn-sm btn-outline-primary"
                          >
                            View
                          </Link>
                        </td>

                        <td>
                          {a?.status === "pending" ? (
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleCancel(a?._id)}
                            >
                              Cancel
                            </button>
                          ) : (
                            <span className="text-muted">N/A</span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-muted py-4">
                        No Appointments Found
                      </td>
                    </tr>
                  )}
                </tbody>

              </table>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default MyAppointment;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   cancelStatus,
//   getAllAppointments,
// } from "../../redux/actions/authActions";
// import { reset } from "../../redux/slice/authSlice";
// import { Link } from "react-router-dom";

// const MyAppointment = () => {
//   const dispatch = useDispatch();
//   const handleCancel = (id) => {
//     dispatch(cancelStatus(id));
//     if (success) {
//       toast.success("Cancel Successfully");
//       window.location.reload();
//     }
//     if (error) {
//       toast.error(error);
//     }
//   };

//   useEffect(() => {
//     const localData = localStorage.getItem("appData");
//     const appData = JSON.parse(localData);
//     if (appData) {
//       const id = appData?.user?._id;
//       dispatch(getAllAppointments(id));
//       dispatch(reset());
//     }
//   }, [dispatch]);
//   const { appointments, error, success } = useSelector((state) => state.auth);
//   console.log("Appointments:", appointments);
//   return (
//     <>
//       <h1>My All Appointments</h1>

//       <table className="table">
//         <thead>
//           <tr>
//             <th>SNO</th>
//             <th>BOOKIND DATE</th>
//             <th>FEES</th>
//             <th>STATUS</th>
//             <th>DETAILS</th>
//             <th>UPDATE BOOKING</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments?.length > 0 &&
//             appointments?.map((a, i) => (
//               <tr key={i + 1}>
//                 <td>{i + 1}</td>
//                 <td>{a?.slotDate}</td>
//                 <td>{a?.amount}</td>
//                 <td>{a?.status}</td>
//                 <td>
//                   <Link to={`/user/appointments/${a?._id}`}>Details</Link>
//                 </td>
//                 <td>
//                   {a?.status == "pending" ? (
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => handleCancel(a?._id)}
//                     >
//                       Cancel
//                     </button>
//                   ) : (
//                     "NA"
//                   )}
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default MyAppointment;