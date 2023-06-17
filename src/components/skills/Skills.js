import React from "react";
import SectionTitle from "../SectionTItle/SectionTitle";
import "./skills.css";

import html from "./skillsiImg/html.png";
import css from "./skillsiImg/css.png";
import js from "./skillsiImg/js.png";
import bootstrap from "./skillsiImg/bootstrap.png";
import github from "./skillsiImg/github.png";
import tailwind from "./skillsiImg/tailwind.png";
import node from "./skillsiImg/node.png";
import reactImg from "./skillsiImg/react.png";
import firebase from "./skillsiImg/firebase.png";
import express from "./skillsiImg/express.png";
import mongoDB from "./skillsiImg/mongoDB.png";
import redux from "./skillsiImg/redux.png";

const Skills = () => {
  return (
    <div>
      <div className="skills container mx-auto mt-20">
      <SectionTitle title="My Skills"></SectionTitle>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mx-0 mx-2 my-10">
       
      <div className="skillsItem">
                  <img src={html} alt="" />
                  <div className="skillsNametext">
                    <h2>HTML</h2>
                    <p>Advanced</p>
                  </div>
                </div>
             
                <div className="skillsItem">
                  <img src={css} alt="" />
                  <div className="skillsNametext">
                    <h2>CSS</h2>
                    <p>Advanced</p>
                  </div>
                </div>
              
                <div className="skillsItem">
                  <img src={js} alt="" />
                  <div className="skillsNametext">
                    <h2>JavaScriipt</h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              
                <div className="skillsItem">
                  <img src={bootstrap} alt="" />
                  <div className="skillsNametext">
                    <h2>Bootstrap</h2>
                    <p>Advanced</p>
                  </div>
                </div>
             
                <div className="skillsItem">
                  <img src={tailwind} alt="" />
                  <div className="skillsNametext">
                    <h2>Tailwind</h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              
                <div className="skillsItem">
                  <img src={reactImg} alt="" />
                  <div className="skillsNametext">
                    <h2>React</h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              
                <div className="skillsItem">
                  <img src={node} alt="" />
                  <div className="skillsNametext">
                    <h2>Node</h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              
                <div className="skillsItem">
                  <img src={mongoDB} alt="" />
                  <div className="skillsNametext">
                    <h2>Mongo DB </h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              
                <div className="skillsItem">
                  <img src={express} alt="" />
                  <div className="skillsNametext">
                    <h2>Express </h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              
                <div className="skillsItem">
                  <img src={firebase} alt="" />
                  <div className="skillsNametext">
                    <h2>Firebase</h2>
                    <p>Intermediate</p>
                  </div>
                </div>
              
                <div className="skillsItem">
                  <img src={github} alt="" />
                  <div className="skillsNametext">
                    <h2>Github </h2>
                    <p>Intermediate</p>
                  </div>
                </div>
           
                <div className="skillsItem">
                  <img src={redux} alt="" />
                  <div className="skillsNametext">
                    <h2>Redux </h2>
                    <p>Beginer</p>
                  </div>
                </div>
      </div>
              
        
      </div>
    </div>
    
  );
};

export default Skills;
