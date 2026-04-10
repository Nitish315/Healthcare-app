import React, { useEffect } from "react";
import DoctorData from "./DoctorsData.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorDetails } from "../../redux/actions/doctorAction";

const Appointment = () => {
  const { id } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getDoctorDetails(id))
  },[dispatch,id])
  const {doctor}= useSelector(state => state.doctor);



  useEffect(() => {
    if(doctor){
      setDocInfo(doctor);
    }
  }, [doctor]);

  return (
    <>
      <div className="container docinfo-container">
        <div className="row md-3">
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
            <img src={`data:image/jpeg;base64,${docInfo?.image}`} alt="docImage" height={200} width={200} />
            <h1>{docInfo?.name}</h1>
            <h1
              className={`${docInfo?.available ? "text-success" : "text-danger"}`}
            >
              {docInfo?.available ? "Available" : "Not Available"}
            </h1>
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center m-3">
            <h6>Experience:{docInfo?.experience} year's</h6>
            <h6>About Doctor:</h6>
            <p>{docInfo?.about}</p>
            <h5>Consultation Fee : ₹{docInfo?.fee}</h5>
            {/* {date time} */}
            <div className="date-time mt-3">
              <h6 className="">Select Your Booking Date and Time:👇</h6>
              <DatePicker
                className="calender"
                minDate={new Date()}
                selected={selectedDateTime}
                onChange={(Date) => setSelectedDateTime(Date)}
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={30}
                dateFormat={"d-MM-yyyy h:mm aa"}
                timeCaption="Time"
                minTime={new Date()}
                maxTime={setHours(setMinutes(new Date(),2),22)}
              />
              <p>Your Selected Booking: {selectedDateTime ? selectedDateTime.toLocaleString():'Please Select a Date and Time  np'}</p>
            </div>
            <button
              className="btn btn-primary w-50"
              disabled={!docInfo?.available}
            >
              {docInfo?.available ? "Book Appointment" : "Doctor Not Available"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
