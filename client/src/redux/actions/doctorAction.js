import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../Api/API";

//get all doctors
export const getAllDoctors = createAsyncThunk(
  "doctor/getAllDoctors",
  async (_, thunkApi) => {
    try {
      const res = await API.get("/doctor/get-all");
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "Get All Doc Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//get Doctor Details
export const getDoctorDetails = createAsyncThunk(
  "doctor/getDoctorDetails",
  async (id, thunkApi) => {
    try {
      const res = await API.get(`/doctor/get-details/${id}`);
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Doctor Detials Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//ADD DOCTOR
export const addDoctor = createAsyncThunk(
  "doctor/addDoctor",
  async (formData, thunkApi) => {
    try {
      const res = await API.post("/doctor/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      // console.log("DETAILED BACKEND ERROR:", error); // ADD THIS LINE
      const message =
        error?.response?.data?.message || error.message || "Add New Doc Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//UPDATE DOCTOR
export const updateDoctor = createAsyncThunk(
  "doctor/updateDoctor",
  async ({id,formData}, thunkApi) => {
    try {
      const res = await API.patch(`/doctor/update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      // console.log("DETAILED BACKEND ERROR:", error); // ADD THIS LINE
      const message =
        error?.response?.data?.message || error.message || "Update Doc Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//DELETE DOCTOR
export const deleteDoctor = createAsyncThunk(
  "doctor/deleteDoctor",
  async (id, thunkApi) => {
    try {
      const res = await API.delete(`/doctor/delete/${id}`);
      return res.data;
    } catch (error) {
      // console.log("DETAILED BACKEND ERROR:", error); // ADD THIS LINE
      const message =
        error?.response?.data?.message || error.message || "Delete Doc Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//UPDATE DOCTOR STATUS
export const updateStatus = createAsyncThunk(
  "doctor/updateStatus",
  async ({id,availableStatus}, thunkApi) => {
    try {
      const res = await API.patch(`/doctor/update-status/${id}`,availableStatus);
      return res.data;
    } catch (error) {
      // console.log("DETAILED BACKEND ERROR:", error); // ADD THIS LINE
      const message =
        error?.response?.data?.message || error.message || "Update Status Doc Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);
