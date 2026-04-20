import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/actions/userActions";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  const { user, appointments } = useSelector((state) => state.user);

  return (
    <Layout>
      <div className="container py-4">
        {/* Profile Section */}
        <div className="card shadow-sm border-0 mb-5">
          <div className="card-body p-4">
            <div className="row align-items-center">
              <div className="col-md-3 text-center mb-3 mb-md-0">
                <img
                  src={user?.image ? `data:image/jpeg;base64,${user.image}` : "https://via.placeholder.com/200"}
                  alt="userProfile"
                  className="rounded-circle border border-4 border-white shadow"
                  style={{ width: "180px", height: "180px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-9">
                <h2 className="fw-bold mb-1">{user?.name}</h2>
                <p className="text-muted mb-4">User ID: <span className="text-dark">#{id?.slice(-6)}</span></p>
                
                <div className="row g-3">
                  <div className="col-sm-6">
                    <small className="text-uppercase text-muted fw-bold d-block">Email Address</small>
                    <span className="fs-5">{user?.email}</span>
                  </div>
                  <div className="col-sm-6">
                    <small className="text-uppercase text-muted fw-bold d-block">Phone Number</small>
                    <span className="fs-5">{user?.phone || "N/A"}</span>
                  </div>
                  <div className="col-12">
                    <small className="text-uppercase text-muted fw-bold d-block">Residential Address</small>
                    <span className="fs-6">{user?.address || "No address provided."}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold text-secondary mb-0">Appointment History</h4>
          <span className="badge bg-dark px-3 py-2">Total: {appointments?.length || 0}</span>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4">SN</th>
                    <th>DATE</th>
                    <th>DOCTOR ID</th>
                    <th>FEES</th>
                    <th>STATUS</th>
                    <th className="text-center">PAYMENT</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments && appointments.length > 0 ? (
                    appointments.map((a, i) => (
                      <tr key={i}>
                        <td className="ps-4 text-muted">{i + 1}</td>
                        <td className="fw-semibold">{a?.slotDate}</td>
                        <td>
                          <code className="text-primary">{a?.doctorId?.slice(-8)}</code>
                        </td>
                        <td>${a?.amount}</td>
                        <td>
                          <span className={`badge rounded-pill ${
                            a?.status === 'Completed' ? 'bg-success' : 
                            a?.status === 'Cancelled' ? 'bg-danger' : 'bg-warning text-dark'
                          }`}>
                            {a?.status}
                          </span>
                        </td>
                        <td className="text-center">
                          <span className={`badge ${a?.payment ? 'text-bg-info' : 'text-bg-secondary'}`}>
                            {a?.payment ? "ONLINE" : "CASH"}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-5 text-muted">
                        No appointments found for this user.
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

export default UserDetails;

// import React, { useEffect } from "react";
// import Layout from "../../components/Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserDetails } from "../../redux/actions/userActions";
// import { useParams } from "react-router-dom";

// const UserDetails = () => {
//   const { id } = useParams();

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getUserDetails(id));
//   }, [dispatch, id]);

//   const { user, appointments } = useSelector((state) => state.user); //getting user
//   return (
//     <Layout>
//       <div className="row d-flex align-items-center bg-light mt-3 p-3">
//         <h3 className="text-center">User Details</h3>
//         <div className="col-md-4">
//           <img
//             src={`data:image/jpeg;base64,${user?.image}`}
//             alt="userImage"
//             height={200}
//             width={200}
//             className="rounded-1 bg-info"
//           />
//         </div>
//         <div className="col-md-8">
//           <h4>NAME:{user?.name}</h4>
//           <h4>EMAIL:{user?.email}</h4>
//           <h4>PHONE:{user?.phone || "NA"}</h4>
//           <h4>ADDRESS:{user?.address || "NA"}</h4>
//         </div>
//       </div>
//       <div>
//         <h2>All Appointments</h2>
//         <table className="table mt-2">
//           <thead>
//             <tr>
//               <th>SN</th>
//               <th>DATE</th>
//               <th>DOCTOR ID</th>
//               <th>FEES</th>
//               <th>STATUS</th>
//               <th>PAYMENT</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments?.map((a, i) => (
//               <tr key={i + 1}>
//                 <td>{i + 1}</td>
//                 <td>{a?.slotDate}</td>
//                 <td>{a?.doctorId}</td>
//                 <td>{a?.amount}</td>
//                 <td>{a?.status}</td>
//                 <td>{a?.payment ? "ONLINE" : "CASH"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Layout>
//   );
// };

// export default UserDetails;
