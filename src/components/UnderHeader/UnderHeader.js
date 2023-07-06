
import React from "react";
import { Link } from "react-router-dom";
import resume from '../../assets/Nusrat Resume.pdf'
import Typewriter from 'typewriter-effect';

export default function UnderHeader() {
  return (
    <section id="about">
      <div className="container lg:text-2xl mx-auto flex pt-20 lg:pt-40 pb-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl"> Hi!!</h1>
          <h2 className="text-3xl my-3">I'm <span className="text-orange-400">Nusrat Jahan</span></h2>
          <h2 className="text-4xl font-bold">
          <Typewriter
            options={{
            strings: ['Web Designer', 'Web Developer','Programmer'],
            autoStart: true,
            loop: true,
          }}
         />
          </h2>
          <p className="my-4 leading-relaxed text-slate-50">
            I'm a professional front-end web developer.<br />
            I have been learning web development since 2021.<br />
            My Work Is Always Simple, Fresh, And Pixel-Perfect. readable code
            also.
          </p>
          <div className="flex justify-center">
            <a download="Nusrat Resume" href={resume} target="_blank" rel="noopener noreferrer"
              className="inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Download CV</a>
            <Link
              to="/contact"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Contact
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}