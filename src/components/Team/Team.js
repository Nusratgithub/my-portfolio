import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SectionTitle from "../SectionTItle/SectionTitle";
import babul from "./teamImg/babul.jpg";
import shiblu from './teamImg/shiblu.jpg'
import rayhan from './teamImg/rayhan.jpg'
import logo from "../../logo.svg";

import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Team.css";

const Team = () => {
  return (
    <div className="team container mx-auto">
      <SectionTitle title="My teams"></SectionTitle>
      <div className="my-10 carousel w-full">
  <div id="item1" className="text-center carousel-item w-full">
<div className="mx-auto">
<img className="w-[100px] mx-auto rounded-full h-[100px]" src={babul} alt="First slide" />
  <h3 className="py-3 text-2xl">Babul Hossain</h3>
  <p className="pb-4 w-1/2 lg:w-1/3 mx-auto">
    Professional front-end web designer. learning more better
    front-end development.
  </p>
  <div className="icons-wrapper flex justify-center">
    <Link
      to="https://www.facebook.com/hamimyasmin.snigdha"
      target="_blank"
    >
      <FaFacebookF className="footerIcons"></FaFacebookF>
    </Link>

    <Link to="#">
      <FaLinkedinIn className="footerIcons"></FaLinkedinIn>
    </Link>

    <Link to="#">
      <FaGithub className="footerIcons"></FaGithub>
    </Link>

    <Link to="#">
      <FaYoutube className="footerIcons"></FaYoutube>
    </Link>
</div>
</div>
</div>
<div id="item2" className="text-center">
<div  className="mx-auto">
<img className="w-[100px] mx-auto rounded-full h-[100px]" src={shiblu} alt="First slide" />
  <h3 className="py-3 text-2xl">Farabi Shiblu</h3>
  <p className="pb-4 w-1/2 lg:w-1/3 mx-auto">
    Professional front-end web designer. learning more better
    front-end development.
  </p>
  <div className="icons-wrapper flex justify-center">
    <Link
      to="https://www.facebook.com/hamimyasmin.snigdha"
      target="_blank"
    >
      <FaFacebookF className="footerIcons"></FaFacebookF>
    </Link>

    <Link to="#">
      <FaLinkedinIn className="footerIcons"></FaLinkedinIn>
    </Link>

    <Link to="#">
      <FaGithub className="footerIcons"></FaGithub>
    </Link>

    <Link to="#">
      <FaYoutube className="footerIcons"></FaYoutube>
    </Link>
</div>
</div>
</div>
<div id="item3" className="text-center">
<div className="mx-auto">
<img className="w-[100px] mx-auto rounded-full h-[100px]" src={rayhan} alt="First slide" />
  <h3 className="py-3 text-2xl">Abu Rayhan</h3>
  <p className="pb-4 w-1/2 lg:w-1/3 mx-auto">
    Professional front-end web designer. learning more better
    front-end development.
  </p>
  <div className="icons-wrapper flex justify-center">
    <Link
      to="https://www.facebook.com/hamimyasmin.snigdha"
      target="_blank"
    >
      <FaFacebookF className="footerIcons"></FaFacebookF>
    </Link>

    <Link to="#">
      <FaLinkedinIn className="footerIcons"></FaLinkedinIn>
    </Link>

    <Link to="#">
      <FaGithub className="footerIcons"></FaGithub>
    </Link>

    <Link to="#">
      <FaYoutube className="footerIcons"></FaYoutube>
    </Link>
</div>
</div>
</div>

</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
    </div>
  );
};

export default Team;