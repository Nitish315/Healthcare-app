import React, { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import GalleryPage from "./pages/Gallery/GalleryPage";
import Register from "./pages/Auth/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Auth/Login";
import AllDoctors from "./pages/Doctors/AllDoctors";
import Appointment from "./pages/Doctors/Appointment";
import UserProfile from "./pages/User/UserProfile";
import MyAppointment from "./pages/User/MyAppointment";
import { useDispatch } from "react-redux";
import { getAllAppointments } from "./redux/actions/authActions";
import { reset } from "./redux/slice/authSlice";
import AppointmentDetail from "./pages/User/AppointmentDetail";

const App = () => {
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
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<AllDoctors />} />
        <Route path="/doctors/:id" element={<Appointment />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/user/appointments" element={<MyAppointment />} />
        <Route path="/user/appointments/:id" element={<AppointmentDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
