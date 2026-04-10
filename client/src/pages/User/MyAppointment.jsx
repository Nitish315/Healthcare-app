import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../redux/actions/authActions";
import { reset } from "../../redux/slice/authSlice";
import { Link } from "react-router-dom";

const MyAppointment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("appData");
    const appData = JSON.parse(localData);
    if (appData) {
      const id = appData?.user?._id;
      dispatch(getAllAppointments(id));
      dispatch(reset());
    }
  }, [dispatch]);
  const { appointments, error, success } = useSelector((state) => state.auth);
  console.log("Appointments:", appointments);
  return (
    <>
      <h1>My All Appointments</h1>
      
      <table className="table">
        <thead>
          <tr>
            <th>SNO</th>
            <th>BOOKIND DATE</th>
            <th>FEES</th>
            <th>STATUS</th>
            <th>DETAILS</th>
            <th>UPDATE BOOKING</th>
          </tr>
        </thead>
        <tbody>
          {appointments?.length > 0 &&
            appointments?.map((a, i) => (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>{a?.slotDate}</td>
                <td>{a?.amount}</td>
                <td>{a?.status}</td>
                <td>
                  <Link to={`/user/appointments/${a?._id}`}>Details</Link>
                  </td>
                <td>
                  {a?.status == "pending" ? <button>Cancel</button> : "NA"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default MyAppointment;
