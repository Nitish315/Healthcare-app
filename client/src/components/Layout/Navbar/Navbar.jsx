import React from 'react'
import Topbar from './Topbar'
import NavMenu from './NavMenu'
import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <div className="navbar-container sticky-top">
        <div className="row">
            <div className="col-md-3">
              <NavLink to="/">
              <img src={Logo} alt='Logo' className='brand-logo'></img>
              </NavLink>
            </div>
            <div className="col-md-9">
              <div>
              <Topbar/>
            </div>
            <div>
              <NavMenu/>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
