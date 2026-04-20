import React from "react";
import "./ShortIntro.css";
import Banner6 from "../../../assets/images/hospital/Banner6.webp";
import { useNavigate } from "react-router-dom";

const ShortIntro = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="intro-container container py-5">
        <div className="row align-items-center">

          {/* Image Section */}
          <div className="col-lg-6 col-md-12 mb-4 text-center">
            <img
              src={Banner6}
              alt="Hospital"
              className="img-fluid rounded shadow hos-image"
            />
          </div>

          {/* Content Section */}
          <div className="col-lg-6 col-md-12 info-container">
            <h1 className="fw-bold mb-2">CareNova</h1>
            <h5 className="text-primary mb-3">
              A Super Specialty Hospital
            </h5>

            <p className="text-muted">
              CareNova is a modern healthcare platform dedicated to providing
              high-quality medical services with advanced technology and expert
              doctors. We focus on delivering patient-centered care with
              convenience, trust, and efficiency.
            </p>

            <p className="text-muted">
              From online appointment booking to specialized treatments, we
              ensure a seamless experience for patients. Our goal is to make
              healthcare accessible, reliable, and hassle-free.
            </p>

            {/* Features */}
            <div className="row mt-4">
              <div className="col-6 mb-3">
                <p>✅ 24/7 Emergency</p>
              </div>
              <div className="col-6 mb-3">
                <p>✅ Expert Doctors</p>
              </div>
              <div className="col-6 mb-3">
                <p>✅ Online Booking</p>
              </div>
              <div className="col-6 mb-3">
                <p>✅ Modern Equipment</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4">
              <button
                className="btn btn-primary me-3"
                onClick={() => navigate("/doctors")}
              >
                Book Appointment
              </button>

              <button
                className="btn btn-outline-dark"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShortIntro;