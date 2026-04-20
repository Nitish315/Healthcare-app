import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppointmentDetails,
  updateAppointmentStatus,
} from "../../redux/actions/appointmentAction";
import InputSelect from "../../components/Forms/InputSelect";
import toast from "react-hot-toast";

const AppointmentDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [appointmentStatus, setAppointmentStatus] = useState("");

  useEffect(() => {
    dispatch(getAppointmentDetails(id));
  }, [dispatch, id]);

  const { appointment, error, success } = useSelector(
    (state) => state.appointments,
  );

  useEffect(() => {
    if (appointment) {
      setAppointmentStatus(appointment?.bookingStatus);
    }
  }, [appointment]);

  const handleUpdateStatus = () => {
    dispatch(updateAppointmentStatus({ id, appointmentStatus }));
    if (success) {
      toast.success("Status Updated");
      navigate("/all-appointments");
    }
    if (error) {
      toast.error(error);
    }
  };
  return (
    <Layout>
      <h1>Appointment Details</h1>
      <table className="table">
        <tbody>
          <tr>
            <th>Client Name</th>
            <td>{appointment?.clientName}</td>
          </tr>
          <tr>
            <th>Client Phone</th>
            <td>{appointment?.clientPhone}</td>
          </tr>
          <tr>
            <th>Client Email</th>
            <td>{appointment?.clientEmail}</td>
          </tr>
          <tr>
            <th>Doctor Name</th>
            <td>{appointment?.doctorName}</td>
          </tr>
          <tr>
            <th>Doctor Phone</th>
            <td>{appointment?.doctorPhone}</td>
          </tr>
          <tr>
            <th>Doctor Email</th>
            <td>{appointment?.doctorEmail}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{appointmentStatus}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 w-50">
        <h4>Update Booking Status</h4>
        <InputSelect
          value={appointmentStatus}
          setValue={setAppointmentStatus}
          options={["pending", "completed", "cancel"]}
        />
        <button className="btn btn-primary" onClick={handleUpdateStatus}>
          UPDATE STATUS
        </button>
      </div>
    </Layout>
  );
};

export default AppointmentDetails;
