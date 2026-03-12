import React from "react";
import "./WhyChoose.css";
import image1 from "../../../assets/images/hospital/banner6.webp";
import image2 from "../../../assets/images/hospital/banner1.jpg";
import image3 from "../../../assets/images/hospital/banner2.png";

const WhyChoose = () => {
  return (
    <>
      <h1 className="text-center mt-5">Why Choose Us?</h1>
      <div className="row why-container">
        <div className="col-md-3">
          <img src={image1} alt="image1" width={"100%"} />
          <h2>Personalize Excellence</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit
            laborum libero delectus qui ducimus, ab iste iure modi quod magnam
            autem consequuntur cum quia error quos nam. Reiciendis, nisi.
             autem consequuntur cum quia error quos nam. Reiciendis, nisi.
          </p>
        </div>
        <div className="col-md-3">
          <img src={image2} alt="image2" width={"100%"} />
          <h2>Trusted Care</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit
            laborum libero delectus qui ducimus, ab iste iure modi quod magnam
            autem consequuntur cum quia error quos nam. Reiciendis, nisi.
          </p>
        </div>
        <div className="col-md-3">
          <img src={image3} alt="image3" width={"100%"} />
          <h2>Empowering Wellness journey</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit
            laborum libero delectus qui ducimus, ab iste iure modi quod magnam
            autem consequuntur cum quia error quos nam. Reiciendis, nisi.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
