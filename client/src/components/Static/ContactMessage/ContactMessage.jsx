import React from 'react';
import "./ContactMessage.css";
import MessageForm from './MessageForm';
import LocationMap from './LocationMap';

const ContactMessage = () => {
  return (
    <>
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#001F3F" }}>Get In Touch</h2>
          <div 
            className="mx-auto mt-2" 
            style={{ height: "4px", width: "50px", backgroundColor: "#008080", borderRadius: "2px" }}
          ></div>
          <p className="text-muted mt-3">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="row justify-content-center g-4">
          {/* Map Column */}
          <div className="col-lg-5 col-md-12">
            <div className="card border-0 shadow-sm h-100 overflow-hidden" style={{ borderRadius: "15px" }}>
              <div className="card-header bg-white border-0 py-3">
                <h5 className="mb-0 fw-bold" style={{ color: "#001F3F" }}>
                  <i className="fa-solid fa-location-dot me-2" style={{ color: "#008080" }}></i>
                  Our Location
                </h5>
              </div>
              <div className="card-body p-0" style={{ minHeight: "400px" }}>
                <LocationMap />
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="col-lg-7 col-md-12">
            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: "15px" }}>
              <div className="card-header text-white py-3" style={{ backgroundColor: "#008080" }}>
                <h5 className="mb-0 fw-bold">
                  <i className="fa-solid fa-paper-plane me-2"></i>
                  Send us a Message
                </h5>
              </div>
              <div className="card-body p-4 p-lg-5">
                {/* Note: Ensure your MessageForm inputs use #008080 for focus borders */}
                <MessageForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMessage;



// import React from 'react'
// import "./ContactMessage.css"
// import MessageForm from './MessageForm'
// import LocationMap from './LocationMap'

// const ContactMessage = () => {
//   return (
//     <>
//     <div className="row message-container">
//         <div className="col-md-4">
//             <LocationMap/>
//         </div>
//         <div className="col-md-6">
//             <MessageForm/>
//         </div>
//     </div>
      
//     </>
//   )
// }

// export default ContactMessage
