import React from "react";
import logo from "../../logo.svg";
import SectionTitle from "../SectionTItle/SectionTitle";

const About = () => {
  return (
    <div className="">
      <SectionTitle title="About Me"></SectionTitle>
        <div className="container mx-auto">
            <div className="">
              <div className="text-white mx-auto my-3 lg:w-7/12 ">
                <p>
                Hello! I'm Nusrat Jahan. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership.
                </p>
              </div>
            </div>
            <div className="lg:flex justify-center lg:mx-0 mx-8  gap-4">
            <div className="border text-white border-sky-600 my-5 p-7 lg:w-6/12 space-y-4">
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
          <div className="border text-white border-sky-600 my-5 p-7 lg:w-6/12 space-y-4">
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
    </div>
  );
};

export default About;
