import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorDetails } from "../../redux/actions/doctorAction";
import { bookAppointment } from "../../redux/actions/authActions";
import { reset } from "../../redux/slice/authSlice";
import toast from "react-hot-toast";

const Appointment = () => {
  const { id } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { doctor } = useSelector((state) => state.doctor);
  const { user, success, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getDoctorDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (doctor) setDocInfo(doctor);
  }, [doctor]);

  const extractDate = (dateObj) => {
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const extractTime = (ObjectTime) => {
    let hours = ObjectTime.getHours();
    const minutes = ObjectTime.getMinutes();
    const second = ObjectTime.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(second).padStart(2, "0")} ${ampm}`;
  };

  const handleBooking = () => {
    const bookingData = {
      userId: user?._id,
      doctorId: id,
      amount: docInfo?.fees,
      slotDate: extractDate(selectedDateTime),
      slotTime: extractTime(selectedDateTime),
    };
    dispatch(bookAppointment(bookingData));
  };

  useEffect(() => {
    if (success) {
      toast.success("Booking Successful");
      navigate("/user/appointments");
      dispatch(reset());
    }
    if (error) {
      toast.error(error);
      dispatch(reset());
    }
  }, [dispatch, error, success, navigate]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: "20px" }}>
            <div className="row g-0">
              
              {/* Doctor Sidebar Profile */}
              <div className="col-md-4 bg-light border-end p-4 text-center d-flex flex-column align-items-center justify-content-center">
                <div className="position-relative mb-3">
                  <img
                    src={`data:image/jpeg;base64,${docInfo?.image}`}
                    alt="Doctor"
                    className="img-fluid shadow"
                    style={{ width: "220px", height: "220px", objectFit: "cover", borderRadius: "15px", border: "4px solid white" }}
                  />
                  <span className={`position-absolute bottom-0 end-0 badge rounded-pill border border-2 border-white ${docInfo?.available ? "bg-success" : "bg-danger"}`} style={{ padding: "10px 15px", transform: "translate(-10%, -10%)" }}>
                    {docInfo?.available ? "Online" : "Away"}
                  </span>
                </div>
                <h3 className="fw-bold mb-1" style={{ color: "#001F3F" }}>{docInfo?.name}</h3>
                <p className="text-muted fw-semibold">Consultant Surgeon</p>
                
                <div className={`mt-2 py-1 px-4 rounded-pill fw-bold small ${docInfo?.available ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"}`}>
                  {docInfo?.available ? "Accepting Patients" : "Currently Unavailable"}
                </div>
              </div>

              {/* Booking Details Section */}
              <div className="col-md-8 p-4 p-lg-5">
                <div className="mb-4 pb-3 border-bottom">
                  <h4 className="fw-bold mb-3" style={{ color: "#008080" }}>Doctor Biography</h4>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary-subtle p-2 rounded me-3" style={{ backgroundColor: "#e0f2f2" }}>
                      <i className="fa-solid fa-briefcase text-teal" style={{ color: "#008080" }}></i>
                    </div>
                    <div>
                      <span className="text-muted small d-block">Experience</span>
                      <span className="fw-bold">{docInfo?.experience} Years of Practice</span>
                    </div>
                  </div>
                  <p className="text-muted lh-lg" style={{ fontSize: "0.95rem" }}>{docInfo?.about}</p>
                </div>

                <div className="row mb-4">
                  <div className="col-sm-6">
                    <h5 className="fw-bold mb-3" style={{ color: "#001F3F" }}>Consultation Fee</h5>
                    <h3 className="text-success fw-bold">₹{docInfo?.fees}</h3>
                  </div>
                  
                  {/* Date Time Picker Section */}
                  <div className="col-sm-6">
                    <h5 className="fw-bold mb-3" style={{ color: "#001F3F" }}>Select Schedule</h5>
                    <div className="custom-datepicker-container">
                      <DatePicker
                        className="form-control border-teal shadow-sm"
                        minDate={new Date()}
                        selected={selectedDateTime}
                        onChange={(date) => setSelectedDateTime(date)}
                        showTimeSelect
                        timeFormat="h:mm aa"
                        timeIntervals={30}
                        dateFormat={"d-MM-yyyy h:mm aa"}
                        timeCaption="Time"
                        minTime={setHours(setMinutes(new Date(), 0), 9)} // Starts at 9 AM
                        maxTime={setHours(setMinutes(new Date(), 0), 21)} // Ends at 9 PM
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-light p-3 rounded mb-4 border-start border-4 border-teal" style={{ borderColor: "#008080 !important" }}>
                  <p className="mb-0 small text-muted">
                    <i className="fa-solid fa-clock-rotate-left me-2"></i>
                    Your selected slot: <span className="fw-bold text-dark">{selectedDateTime?.toLocaleString() || "Select a slot"}</span>
                  </p>
                </div>

                <button
                  className="btn btn-lg w-100 fw-bold shadow-sm"
                  style={{ backgroundColor: "#008080", color: "white", borderRadius: "10px" }}
                  disabled={!docInfo?.available}
                  onClick={handleBooking}
                >
                  <i className="fa-solid fa-calendar-check me-2"></i>
                  {docInfo?.available ? "Confirm Booking Now" : "Doctor Currently Offline"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

// import React, { useEffect } from "react";
// import DoctorData from "./DoctorsData.json";
// import { useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { setHours, setMinutes } from "date-fns";
// import { useDispatch, useSelector } from "react-redux";
// import { getDoctorDetails } from "../../redux/actions/doctorAction";
// import { bookAppointment } from "../../redux/actions/authActions";
// import { reset } from "../../redux/slice/authSlice";
// import toast from "react-hot-toast";

// const Appointment = () => {
//   const { id } = useParams();
//   const [docInfo, setDocInfo] = useState(null);
//   const [selectedDateTime, setSelectedDateTime] = useState(new Date());
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(getDoctorDetails(id));
//   }, [dispatch, id]);
//   const { doctor } = useSelector((state) => state.doctor);
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (doctor) {
//       setDocInfo(doctor);
//     }
//   }, [doctor]);

//   //Get Date and Time
//   const extractDate = (dateObj)=>{
//     const day = String(dateObj.getDate()).padStart(2,'0')
//     const month = String(dateObj.getMonth()+1).padStart(2,'0')
//     const year = dateObj.getFullYear()
//     return `${day}-${month}-${year}`
//   }
//   const extractTime = (ObjectTime) => {
//   let hours = ObjectTime.getHours();
//   const minutes = ObjectTime.getMinutes();
//   const second = ObjectTime.getSeconds();
//   const ampm = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12;
//   hours = hours ? hours : 12;
//   return `${String(hours).padStart(2, "0")}: ${String(minutes).padStart(2,"0"
//   )}: ${String(second).padStart(2, "0")} ${ampm}`;
// };

//   const { success, error } = useSelector((state) => state.auth);
//   const handleBooking = () => {
//     const bookingData = {
//       userId: user?._id,
//       doctorId: id,
//       amount: docInfo?.fees,
//       slotDate: extractDate(selectedDateTime),
//       slotTime: extractTime(selectedDateTime),
//     };
//     dispatch(bookAppointment(bookingData))
//   };
//   useEffect(()=>{
//      if(success){
//       toast.success("Booking SuccessFull")
//       navigate("/user/appointments")
//       dispatch(reset())
//     }
//     if(error){
//       toast.error(error)
//       dispatch(reset())
//     }
//   },[dispatch,error,success,navigate])

//   return (
//     <>
//       <div className="container docinfo-container">
//         <div className="row md-3">
//           <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
//             <img
//               src={`data:image/jpeg;base64,${docInfo?.image}`}
//               alt="docImage"
//               height={200}
//               width={200}
//             />
//             <h1>{docInfo?.name}</h1>
//             <h1
//               className={`${docInfo?.available ? "text-success" : "text-danger"}`}
//             >
//               {docInfo?.available ? "Available" : "Not Available"}
//             </h1>
//           </div>
//           <div className="col-md-8 d-flex flex-column justify-content-center m-3">
//             <h6>Experience:{docInfo?.experience} year's</h6>
//             <h6>About Doctor:</h6>
//             <p>{docInfo?.about}</p>
//             <h5>Consultation Fee : ₹{docInfo?.fees}</h5>
//             {/* {date time} */}
//             <div className="date-time mt-3">
//               <h6 className="">Select Your Booking Date and Time:👇</h6>
//               <DatePicker
//                 className="calender"
//                 minDate={new Date()}
//                 selected={selectedDateTime}
//                 onChange={(Date) => setSelectedDateTime(Date)}
//                 showTimeSelect
//                 timeFormat="h:mm aa"
//                 timeIntervals={30}
//                 dateFormat={"d-MM-yyyy h:mm aa"}
//                 timeCaption="Time"
//                 minTime={new Date()}
//                 maxTime={setHours(setMinutes(new Date(), 2), 22)}
//               />
//               <p>
//                 Your Selected Booking:{" "}
//                 {selectedDateTime
//                   ? selectedDateTime.toLocaleString()
//                   : "Please Select a Date and Time  np"}
//               </p>
//             </div>
//             <button
//               className="btn btn-primary w-50"
//               disabled={!docInfo?.available}
//               onClick={handleBooking}
//             >
//               {docInfo?.available ? "Book Appointment" : "Doctor Not Available"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Appointment;
