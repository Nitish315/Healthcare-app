import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getAllDoctors } from "../../redux/actions/doctorAction";
import { reset } from "../../redux/slice/doctorSlice";

const AllDoctors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(reset());
  }, [dispatch]);

  const { doctors } = useSelector((state) => state.doctor);

  return (
    <Layout>
      <div className="container py-4">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center bg-white p-4 rounded-3 shadow-sm mb-4 border">
          <div>
            <h2 className="fw-bold text-dark mb-1">Doctor Management</h2>
            <p className="text-muted mb-0">View and manage all registered medical professionals</p>
          </div>
          <button
            className="btn btn-primary btn-lg mt-3 mt-md-0 px-4 shadow-sm"
            onClick={() => navigate("/add-doctor")}
          >
            <i className="bi bi-plus-lg me-2"></i>+ Add New Doctor
          </button>
        </div>

        {/* Table Section */}
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4 py-3">#</th>
                    <th>DOCTOR</th>
                    <th>SPECIALITY</th>
                    <th>CONSULTATION FEE</th>
                    <th>AVAILABILITY</th>
                    <th className="text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors && doctors.length > 0 ? (
                    doctors.map((d, i) => (
                      <tr key={d?._id || i}>
                        <td className="ps-4 text-muted">{i + 1}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={
                                d?.image
                                  ? `data:image/jpeg;base64,${d.image}`
                                  : "https://via.placeholder.com/50"
                              }
                              alt={d?.name}
                              className="rounded-circle border me-3"
                              style={{ width: "45px", height: "45px", objectFit: "cover" }}
                            />
                            <div>
                              <div className="fw-bold text-dark">{d?.name}</div>
                              <small className="text-muted">ID: {d?._id?.slice(-6)}</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-light text-primary border border-primary-subtle px-3 py-2">
                            {d?.speciality}
                          </span>
                        </td>
                        <td className="fw-semibold">
                          ${d?.fees}
                        </td>
                        <td>
                          {d?.available ? (
                            <span className="badge bg-success-subtle text-success px-3">
                              ● Available
                            </span>
                          ) : (
                            <span className="badge bg-danger-subtle text-danger px-3">
                              ● Busy
                            </span>
                          )}
                        </td>
                        <td className="text-center">
                          <Link 
                            to={`/doctor-details/${d?._id}`}
                            className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                          >
                            Details
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-5 text-muted">
                        <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                        Loading doctors list...
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

export default AllDoctors;

// import React, { useEffect } from "react";
// import Layout from "../../components/Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import { getAllDoctors } from "../../redux/actions/doctorAction";
// import { reset } from "../../redux/slice/doctorSlice";

// const AllDoctors = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(getAllDoctors());
//     dispatch(reset());
//   }, [dispatch]);

//   const { doctors } = useSelector((state) => state.doctor);
//   return (
//     <Layout>
//       <div className="d-flex p-3 justify-content-between bg-light">
//         <h1>All Doctors List</h1>
//         <button
//           className="btn btn-primary"
//           onClick={() => navigate("/add-doctor")}
//         >
//           + ADD DOCTOR
//         </button>
//       </div>
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>SNO</th>
//               <th>IMAGE</th>
//               <th>NAME</th>
//               <th>SPECIALITY</th>
//               <th>FEES</th>
//               <th>AVAILABLE</th>
//               <th>DETAILS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {doctors?.map((d, i) => (
//               <tr key={i + 1}>
//                 <td>{i + 1}</td>
//                 <td>
//                   <img
//                     // src={`data:image/jpeg;base64,${d?.image}`}
//                     src={
//                       d?.image
//                         ? `data:image/jpeg;base64,${d.image}`
//                         : "https://via.placeholder.com/50"
//                     }
//                     alt="docimage"
//                     className="bg-info"
//                     height={50}
//                     width={50}
//                   />
//                 </td>
//                 <td>{d?.name}</td>
//                 <td>{d?.speciality}</td>
//                 <td>{d?.fees}</td>
//                 <td>{d?.available ? "Available" : "Not Available"}</td>
//                 <td>
//                   <Link to={`/doctor-details/${d?._id}`}>More Details</Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Layout>
//   );
// };

// export default AllDoctors;
