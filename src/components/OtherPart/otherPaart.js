import React from "react";
import { Link } from "react-router-dom";

const OtherPart = () => {
  return (
    <div className="mb-10">
      <div className="container mx-auto py-4 bg-[#13233fe9]">
        <div className="">
          <div className="text-center mx-auto my-3 lg:w-1/2 ">
            <h1 className="text-xl py-3 text-orange-400">HIRE ME FOR YOUR AWESOME PROJECT</h1>
            <p className="text-xl">
              I am available for Freelance projects that depends on your project value. Hire me and get your project done!
            </p>
            <Link to='/contact'>
              <button className="border px-5 rounded py-1 bg-orange-400  my-4">HIRE ME</button>
            </Link>
          </div>
        </div>



      </div>
    </div>
  );
};

export default OtherPart;
