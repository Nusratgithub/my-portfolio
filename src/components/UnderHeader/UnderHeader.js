import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./UnderHeader.css";

const UnderHeader = () => {
  return (
    <div className="underHeader-wrapper">
      <div className="underHeader_item">
        <div className="underHeader_text_side common-underHeader-div">
          <div className="my-text-underHeader">
            <h1>Welcome!!</h1>
            <h2>I'm <span className="">Nusrat Jahan</span></h2>
            <p>
              I'm a professional front-end web developer. <br />
              I have been learning web development since 2021. <br />
              My Work Is Always Simple, Fresh, And Pixel-Perfect. readable code
              also.
            </p>
            <div className="underHeader-buttons ">
              <button>Download Cv</button>
              <Link to="/contact">
                <button>Contact</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="underHeader-img-side w-full common-underHeader-div">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UnderHeader;
