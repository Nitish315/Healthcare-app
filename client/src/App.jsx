import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Layout/Navbar/Navbar'
import Footer from './components/Layout/Footer/Footer'
import GalleryPage from './pages/Gallery/GalleryPage'
import Register from './pages/Auth/Register'
import {Toaster} from 'react-hot-toast'
import Login from './pages/Auth/Login'
import AllDoctors from './pages/Doctors/AllDoctors'
import Appointment from './pages/Doctors/Appointment'
import UserProfile from './pages/User/UserProfile'
import MyAppointment from './pages/User/MyAppointment'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/doctors' element={<AllDoctors/>}/>
        <Route path='/doctors/:id' element={<Appointment/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/user/appointments' element={<MyAppointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
