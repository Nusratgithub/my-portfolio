import React from "react";
import About from "../About/About";
import Skills from "../skills/Skills";
import UnderHeader from "../UnderHeader/UnderHeader";
import OtherPart from "../OtherPart/otherPaart";
import Contact from "../Contact/Contact";
import SomeProject from "../Project/SomeProject";
import Team from '../Team/Team'
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
  
  return (
    <div>
      <UnderHeader></UnderHeader>
      <Skills></Skills>
      <SomeProject></SomeProject>
      {/* <Team></Team> */}
      <Testimonials />
      <OtherPart></OtherPart>
      <Contact></Contact>
    </div>
  );
};

export default Home;
