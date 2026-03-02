import React from "react";
import Slider from "../components/Slider/Slider";
import Facility from "../components/Static/Facility/Facility";
import ShortIntro from "../components/Static/ShortIntro/ShortIntro";
import WhyChoose from "../components/Static/WhyChoose/WhyChoose";
import ContactMessage from "../components/Static/ContactMessage/ContactMessage";

const Home = () => {
  return (
    <>
      <Slider />
      <Facility/>
      <ShortIntro/>
      <WhyChoose/>
      <ContactMessage/>
    </>
  );
};

export default Home;
