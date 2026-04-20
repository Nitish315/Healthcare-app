import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.user);

  return (
    <Layout>
      <div className="container py-4">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-secondary">User Management</h2>
          <span className="badge bg-primary rounded-pill">
            Total Users: {users?.length || 0}
          </span>
        </div>

        {/* Responsive Table Container */}
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4">#</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th className="text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {users && users.length > 0 ? (
                    users.map((user, i) => (
                      <tr key={user?._id || i}>
                        <td className="ps-4 fw-bold text-muted">{i + 1}</td>
                        <td>
                          <div className="fw-semibold text-dark">{user?.name}</div>
                        </td>
                        <td>{user?.email}</td>
                        <td>
                          <span className="text-muted">
                            {user?.phone || "—"}
                          </span>
                        </td>
                        <td className="text-center">
                          <Link 
                            to={`/user-details/${user?._id}`}
                            className="btn btn-outline-primary btn-sm px-3 rounded-pill"
                          >
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-5 text-muted">
                        No users found.
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

export default AllUsers;

// import React from "react";
// import Layout from "../../components/Layout/Layout";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllUsers } from "../../redux/actions/userActions";
// import { Link } from "react-router-dom";

// const AllUsers = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, [dispatch]);
//   const { users } = useSelector((state) => state.user);
//   return (
//     <Layout>
//       <h4 className="text-center my-3">All User</h4>
//       <table className="table mt-3 ">
//         <thead>
//           <tr>
//             <th>SN</th>
//             <th>NAME</th>
//             <th>EMAIL</th>
//             <th>PHONE</th>
//             <th>DETAILS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users &&
//             users.map((user, i) => (
//               <tr key={i + 1}>
//                 <td>{i + 1}</td>
//                 <td>{user?.name}</td>
//                 <td>{user?.email}</td>
//                 <td>{user?.phone || "NA"}</td>
//                 <td>
//                   <Link to={`/user-details/${user?._id}`}>More Details</Link>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </Layout>
//   );
// };

// export default AllUsers;
