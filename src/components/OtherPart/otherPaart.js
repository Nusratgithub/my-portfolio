import React from "react";
import { Link } from "react-router-dom";

const OtherPart = () => {
  return (
    <div className="">
      <div className="container mx-auto py-5 bg-sky-500">
        <div className="">
          <div className=" mx-auto my-3 lg:w-7/12 ">
            <h1 className="text-2xl py-3">HIRE ME FOR YOUR AWESOME PROJECT</h1>
            <p className="text-xl">
              I am available for Freelance projects that depends on your project value. Hire me and get your project done!
            </p>
            <Link to='/contact'>
              <button className="border px-5 rounded py-1 hover:bg-sky-400  my-4">HIRE ME</button>
            </Link>
          </div>
        </div>



      </div>
    </div>
  );
};

export default OtherPart;
