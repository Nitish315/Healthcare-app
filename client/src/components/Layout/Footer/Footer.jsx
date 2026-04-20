import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">

            {/* About Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="fw-bold">HealthCare App</h5>
              <p className="small">
                We provide the best healthcare services with top doctors.
                Book appointments easily and manage your health digitally.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li><NavLink to="/" className="text-light text-decoration-none">Home</NavLink></li>
                <li><NavLink to="/about" className="text-light text-decoration-none">About</NavLink></li>
                <li><NavLink to="/doctors" className="text-light text-decoration-none">Doctors</NavLink></li>
                <li><NavLink to="/contact" className="text-light text-decoration-none">Contact</NavLink></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h6 className="fw-bold">Contact</h6>
              <p className="small mb-1">📍 Punjab, India</p>
              <p className="small mb-1">📞 +91 9876543210</p>
              <p className="small">📧 support@healthcare.com</p>
            </div>

            {/* Social Media */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h6 className="fw-bold">Follow Us</h6>
              <div>
                <i className="fab fa-facebook me-3"></i>
                <i className="fab fa-instagram me-3"></i>
                <i className="fab fa-linkedin me-3"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>

          </div>

          <hr className="border-light" />

          {/* Bottom Line */}
          <div className="text-center">
            <p className="mb-0 small">
              © 2026 Nitish Singh | All Rights Reserved | Made with ❤️ in India
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;