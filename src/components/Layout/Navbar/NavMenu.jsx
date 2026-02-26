import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/doctors">
                Doctors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <form className="d-flex" role="search">
            
            <button className="btn btn-outline-success" type="submit">
              Book A Appointment
            </button>
          </form>

        </div>
      </div>
    </nav>
    </>
  )
}

export default NavMenu
