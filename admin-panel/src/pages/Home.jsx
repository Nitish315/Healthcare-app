import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/actions/authActions";
import { getStats } from "../redux/actions/userActions";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { stats } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getStats());
  }, [dispatch]);

  return (
    <Layout>
      <div className="container-fluid py-2">
        
        {/* Main Header Card */}
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="fw-bold text-dark mb-1" style={{ fontSize: "2.2rem", letterSpacing: "-1px" }}>Overview</h1>
              <p className="text-muted mb-0">Welcome back, <span className="text-primary fw-bold">{user?.name}</span> 👋</p>
            </div>
            <span className="badge bg-light text-success border border-success border-opacity-25 p-2 px-3 rounded-pill fw-bold">
               Admin Status: Active
            </span>
          </div>
        </div>

        {/* Stats Section - 3 Column Grid */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white border-start border-4 border-primary">
              <p className="text-muted small fw-bold text-uppercase mb-1">Total Users</p>
              <h2 className="fw-bold mb-3">{stats?.totalUsers || 0}</h2>
              <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2">
                Active Community
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white border-start border-4 border-warning">
              <p className="text-muted small fw-bold text-uppercase mb-1">Total Doctors</p>
              <h2 className="fw-bold mb-3">{stats?.totalDoctors || 0}</h2>
              <span className="badge bg-warning bg-opacity-10 text-warning-emphasis rounded-pill px-3 py-2">
                Verified Staff
              </span>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card border-0 text-white shadow-sm rounded-4 p-4 h-100" 
                 style={{ background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)" }}>
              <p className="text-uppercase small fw-bold mb-1 opacity-75">Revenue Overview</p>
              <h2 className="fw-bold mb-3">${stats?.earnings?.toLocaleString() || "0.00"}</h2>
              <span className="badge bg-white bg-opacity-25 rounded-pill px-3 py-2">
                Updated just now
              </span>
            </div>
          </div>
        </div>

        {/* Health Alert Box */}
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
          <div className="d-flex align-items-center">
            <div className="fs-1 me-4">🚀</div>
            <div>
              <h5 className="fw-bold mb-1">System Health is Optimal</h5>
              <p className="text-muted mb-0 small">All nodes are running smoothly. Synchronization is at 100%.</p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Home;

// import React, { useEffect } from "react";
// import Layout from "../components/Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserData } from "../redux/actions/authActions";
// import { getStats } from "../redux/actions/userActions";

// const Home = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUserData());
//     dispatch(getStats());
//   }, [dispatch]);

//   const { user } = useSelector((state) => state.auth);
//   const { stats } = useSelector((state) => state.user);
//   return (
//     <Layout>
//       <div className="d-flex flex-column my-3 border bg-light rounded-3 text-center">
//         <h1 className="pt-3">DASHBOARD</h1>
//         <p>Doctor Appointment App</p>
//         <p className="text-success">
//           Welcome{user?.name} || Email:{user?.email}{" "}
//         </p>
//       </div>
//       <div className="d-flex flex-wrap">
//         <div className="card m-3 bg-success text-white w-50">
//           <div className="card-body d-flex flex-column align-items-center p-4">
//             <h1>{stats?.totalUsers}</h1>
//             <h1>Total Users</h1>
//           </div>
//         </div>
//         <div className="card m-3 bg-warning text-white w-50">
//           <div className="card-body d-flex flex-column align-items-center p-4">
//             <h1>{stats?.totalDoctors}</h1>
//             <h1>Total Doctors</h1>
//           </div>
//         </div>
//         <div className="card m-3 bg-info text-white w-50">
//           <div className="card-body d-flex flex-column align-items-center p-4">
//             <h1>{stats?.earnings}</h1>
//             <h1>Total Earnings</h1>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;
