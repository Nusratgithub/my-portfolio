import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer =() => {
 return(
    <footer className="footer footer-center p-10 text-white rounded">
  <div>
  <div className="mt-5">
        <div className="icons-wrapper flex">
          <Link to="https://www.facebook.com/profile.php?id=100079180064073" target="_blank">
            <FaFacebookF className="footerIcons"></FaFacebookF>
          </Link>

          <Link to="https://www.linkedin.com/in/ms-nusrat-jahan/" target="_blank">
            <FaLinkedinIn className="footerIcons"></FaLinkedinIn>
          </Link>

          <Link to="https://github.com/Nusratgithub">
            <FaGithub className="footerIcons"></FaGithub>
          </Link>

          <Link to="#">
            <FaYoutube className="footerIcons"></FaYoutube>
          </Link>
        </div>
      </div>
  </div> 
  <div className="font-bold">
    <p>Copyright © 2023 - All right reserved by Nusrat Jahan</p>
  </div>
</footer>
 )
}
export default Footer;