import React from "react";
import SectionTitle from "../SectionTItle/SectionTitle";
import logo from "../../logo.svg";


const About = () => {
  return (
    <div className="container mx-auto my-10 text-gray-300">
            <div className="lg:flex justify-center gap-4">
        <div className="border border-gray-600 my-5 p-7 lg:w-6/12 bg-[#13233fe9] space-y-4">
                <div className="">
                  {/* <i>
                      <UserIcon className="text-sky-600 " />
                    </i> */}
                  <b>Name : </b> <span>Nusrat Jahan</span>
                </div>

                <div>
                  {/* <i>
                      <PhoneIcon className="aboutInnerIcon" />
                    </i> */}
                  <b>Phone : </b> <span>01830706246</span>
                </div>

                <div>
                  {/* <i>
                      <InboxIcon className="aboutInnerIcon" />
                    </i> */}
                  <b>Email: </b> <span>nusrat17175@gmail.com</span>
                </div>
              </div>
        <div className="border border-gray-600 my-5  bg-[#13233fe9] p-7 lg:w-6/12 space-y-4">
                <div>
                  {/* <i>
                      <FlagIcon className="aboutInnerIcon" />
                    </i> */}
                  <b>Nationality : </b> <span>Bangladeshi</span>
                </div>

                <div>
                  {/* <i>
                      <MapIcon className="aboutInnerIcon" />
                    </i> */}
                  <b>Address : </b> <span>Chittagong</span>
                </div>

                <div>
                  {/* <i>
                      <GlobeAltIcon className="aboutInnerIcon" />
                    </i> */}
                  <b>Freelance : </b> <span>Available</span>
                </div>
              </div>
            </div>
     

    </div>
  );
};

export default About;