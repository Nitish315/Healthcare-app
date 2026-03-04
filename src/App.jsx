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
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
