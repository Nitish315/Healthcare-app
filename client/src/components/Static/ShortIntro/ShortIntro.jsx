import React from "react";
import "./ShortIntro.css";
import Banner6 from "../../../assets/images/hospital/Banner6.webp";
const ShortIntro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="row">
          <div className="col-md-6 img-container">
            <img src={Banner6} alt="Banner6" className="hos-image"></img>
          </div>
          <div className="col-md-5 info-container">
            <h1>CareNova</h1>
            <h6>A Super Specility Hospital</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              sunt porro rerum quibusdam eveniet enim officia id commodi,
              consequuntur exercitationem molestiae suscipit alias error
              voluptate deleniti saepe cum sit provident. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Odit omnis quos ut aperiam
              magni veniam eos consectetur fuga, tempore optio suscipit iusto
              nobis ipsum non tenetur sit assumenda reiciendis debitis?
            </p>
            <button className="btn btn-primary">Book A Appointment Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortIntro;
