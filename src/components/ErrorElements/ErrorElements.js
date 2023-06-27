import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/errorpage.png";
const ErrorElements = () => {
  return (
    <section className="flex items-center h-screen p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center">
          <img src={errorImg} alt="" className='mb-10' />
          <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-orange-400 ">Back to Homepage</Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorElements;
