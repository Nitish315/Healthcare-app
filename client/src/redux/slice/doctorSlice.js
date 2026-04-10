import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUserDetails } from "../actions/userActions";
import { addDoctor, deleteDoctor, getAllDoctors, getDoctorDetails, updateDoctor, updateStatus } from "../actions/doctorAction";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    loading: false,
    success: false,
    doctors: null,
    doctor: null,
    error: null,
  },
  reducers: {
    reset: (state) => {
      state.error = null;
      state.success = false;
    },
  },
    extraReducers: (builder) => {
      builder
        //getAllDoctors
        .addCase(getAllDoctors.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllDoctors.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.doctors = action.payload.doctors;
        })
        .addCase(getAllDoctors.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })

        //get Doctor Details
        .addCase(getDoctorDetails.pending, (state) => {
          state.loading = true;
        })
        .addCase(getDoctorDetails.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.doctor = action.payload.doctor;
          
        })
        .addCase(getDoctorDetails.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })

        //Add New Doctor
        .addCase(addDoctor.pending, (state) => {
          state.loading = true;
        })
        .addCase(addDoctor.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.doctor = action.payload.doctor;
          
        })
        .addCase(addDoctor.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        //Update Doctor
        .addCase(updateDoctor.pending, (state) => {
          state.loading = true;
        })
        .addCase(updateDoctor.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
          // state.doctor = action.payload.doctor;
          
        })
        .addCase(updateDoctor.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        //Delete Doctor
        .addCase(deleteDoctor.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteDoctor.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
          // state.doctor = action.payload.doctor;
          
        })
        .addCase(deleteDoctor.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        //Update Status Doctor
        .addCase(updateStatus.pending, (state) => {
          state.loading = true;
        })
        .addCase(updateStatus.fulfilled, (state) => {
          state.loading = false;
          state.success = true;
          // state.doctor = action.payload.doctor;
          
        })
        .addCase(updateStatus.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
    },
});

export const { reset, logout } = doctorSlice.actions;
export default doctorSlice.reducer;
