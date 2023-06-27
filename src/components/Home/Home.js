import React from "react";
import About from "../About/About";
import Skills from "../skills/Skills";
import UnderHeader from "../UnderHeader/UnderHeader";
import OtherPart from "../OtherPart/otherPaart";
import Contact from "../Contact/Contact";
import SomeProject from "../Project/SomeProject";

const Home = () => {
  
  return (
    <div>
      <UnderHeader></UnderHeader>
      <Skills></Skills>
      <SomeProject></SomeProject>
      {/* <OtherPart></OtherPart> */}
      <Contact></Contact>
    </div>
  );
};

export default Home;
