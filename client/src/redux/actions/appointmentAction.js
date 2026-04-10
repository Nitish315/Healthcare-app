import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../Api/API";

//get all appointments
export const getAllAppointments = createAsyncThunk(
  "appointment/getAllAppointments",
  async (_, thunkApi) => {
    try {
      const res = await API.get("/appointment/get-all");
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Get All Appointments Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//get Appointment Details
export const getAppointmentDetails = createAsyncThunk(
  "appointment/getAppointmentDetails",
  async (id, thunkApi) => {
    try {
      const res = await API.get(`/appointment/get-details/${id}`);
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Appointment Detials Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//UPDATE APPOINTMENT STATUS
export const updateAppointmentStatus = createAsyncThunk(
  "appointment/updateAppointmentStatus",
  async ({ id, appointmentStatus }, thunkApi) => {
    try {
      const res = await API.patch(`/appointment/update-status/${id}`, {
        appointmentStatus,
      });
      return res.data;
    } catch (error) {
      // console.log("DETAILED BACKEND ERROR:", error); // ADD THIS LINE
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Update Appointment Status Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);
