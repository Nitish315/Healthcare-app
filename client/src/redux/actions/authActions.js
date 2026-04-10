import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../Api/API";

//Login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkApi) => {
    try {
      const res = await API.post("/user/login", { email, password });
      localStorage.setItem("appData", JSON.stringify(res?.data));
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "Login Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);
//Register
export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkApi) => {
    try {
      const res = await API.post("/user/register", { name, email, password });
      return res?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "Register Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//get User Data
export const getUserData = createAsyncThunk("auth/getUserData", () => {
  const localData = localStorage.getItem("appData");
  const appData = JSON.parse(localData);
  return appData?.user;
});
//get token
export const loadToken = createAsyncThunk("auth/loadToken", () => {
  const localData = localStorage.getItem("appData");
  const appData = JSON.parse(localData);
  return appData?.token;
});

//get Login User  Details
export const getLoginUserDetails = createAsyncThunk(
  "user/getLoginUserDetails",
  async (id, thunkApi) => {
    try {
      const res = await API.get(`/user/get-login-user/${id}`);
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "User Detials Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);
//Update User
export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async ({ id, formData }, thunkApi) => {
    try {
      const res = await API.patch(`/user/update/${id}`, formData, {
        headers: {
          "Content-type": "multipath/form-data",
        },
      });
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "User Detials Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//getAllAppointments
export const getAllAppointments = createAsyncThunk(
  "user/getAllAppointments",
  async (id, thunkApi) => {
    try {
      // const res = await API.get(`/appointment/get-user-appointments/${id}`);
       const res = await API.get(`/appointment/get-user-appointment/${id}`);
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "User Appointment Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//Cancel Status
export const cancelStatus = createAsyncThunk(
  "user/cancelStatus",
  async (id, thunkApi) => {
    try {
      const res = await API.get(`/appointment/cancel/${id}`);
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "User Appointment Cancel Error";
      return thunkApi.rejectWithValue(message);
    }
  },
);
