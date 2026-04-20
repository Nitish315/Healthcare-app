import React, { useState } from "react";
import Menus from "./Menus";
import Footer from "./Footer";

const Layout = ({ children }) => {
  // State to handle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="d-flex">
        {/* Sidebar Section */}
        <div 
          className={`bg-dark transition-all ${isMobileMenuOpen ? "d-block" : "d-none"} d-md-block`}
          style={{ 
            minWidth: "250px", 
            maxWidth: "250px", 
            minHeight: "100vh",
            zIndex: 1000 
          }}
        >
          <Menus />
        </div>

        {/* Main Content Section */}
        <div 
          className="flex-grow-1 bg-light d-flex flex-column" 
          style={{ minHeight: "100vh", width: "100%" }}
        >
          {/* Mobile Toggle Bar (Only visible on small screens) */}
          <div className="d-md-none bg-white p-3 shadow-sm d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold text-dark">Admin Panel</h5>
            <button 
              className="btn btn-dark btn-sm" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i> 
              {isMobileMenuOpen ? " Close" : " Menu"}
            </button>
          </div>

          {/* Page Content */}
          <div className="container-fluid p-3 p-md-5 flex-grow-1">
            <div style={{ minHeight: "80vh" }}>
              {children}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="d-md-none position-fixed top-0 start-0 w-100 h-100 bg-black opacity-50" 
          style={{ zIndex: 999 }}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <style>{`
        .transition-all { transition: all 0.3s ease; }
        body { background-color: #f8f9fa; }
        @media (max-width: 768px) {
          .bg-dark {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;

// import React, { children } from "react";
// import Menus from "./Menus";
// import Footer from "./Footer";

// const Layout = ({children}) => {
//   return (
//     <>
//       <div className="row">
//         <div className="col-md-2">
//           <Menus />
//         </div>
//         <div className="col-md-10" >
//             <div className="" style={{ minHeight: "80vh" }}>
//                  {children}
//             </div>
         
//           <Footer/>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;
