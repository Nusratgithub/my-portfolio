import React from "react";
import SectionTitle from "../SectionTItle/SectionTitle";
import { CodeBracketIcon, PencilSquareIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import { FaHtml5, FaCss3Alt,FaMobileAlt,} from "react-icons/fa";
import {BiSupport} from "react-icons/bi";
import {FiSettings} from "react-icons/fi";

import "./Services.css";
const Services = () => {
  return (
    <div className="py-10 container mx-auto">
      <SectionTitle title=" My Services"></SectionTitle>
   
            <div className="grid lg:grid-cols-3 gap-3 my-5">
              <div className="inner-service-content">
                    <CodeBracketIcon className="services-inner-icon"></CodeBracketIcon>
                    <h2>Web Design</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
              </div>

              <div className="inner-service-content">
                    <PencilSquareIcon className="services-inner-icon"></PencilSquareIcon>
                    <h2>Graphic Design</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
              </div>
       
              <div className="inner-service-content">
                    <CodeBracketIcon className="services-inner-icon"></CodeBracketIcon>
                    <h2>Web Development</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
              </div>

              <div className="inner-service-content">
                    <FaHtml5 className="services-inner-icon"></FaHtml5>
                    <h2>Validate Html5</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
              </div>

              
              <div className="inner-service-content">
                    <FaCss3Alt className="services-inner-icon"></FaCss3Alt>
                    <h2>Css3 Animation</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
              </div>
             

              <div className="inner-service-content">
                    <FaMobileAlt className="services-inner-icon"></FaMobileAlt>
                    <h2>Fully Responsive</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
              </div>
    

              <div className="inner-service-content">
                    <ArrowPathIcon className="services-inner-icon"></ArrowPathIcon>
                    <h2>Unlimited Revision</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
              </div>
          

              <div className="inner-service-content">
                    <BiSupport className="services-inner-icon"></BiSupport>
                    <h2>Life Time Support</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
               </div>


              <div className="inner-service-content">
                    <FiSettings className="services-inner-icon"></FiSettings>
                    <h2>Technical Support</h2>
                    <p>
                      Conversion from PSD/XD/Figma to Pixel Perfect
                      Design,Device Responsive, jQuery Plugin Effects,Clean
                      Hand-Written Code with W3C Validation, Cross-Browser
                      Compatibility.
                    </p>
              </div>
              </div>
              
            </div>
     
  );
};

export default Services;