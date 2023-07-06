import React from "react";
import SectionTitle from "../SectionTItle/SectionTitle";
import "./Contact.css";
import About from '../About/About'

const ContactPage = () => {
  const handleSendMsg = () => {
    alert("user send msg successfully");

  };
  return (
    <div className="contact leading-relaxed container mx-auto my-10">
      <SectionTitle title="Contact me"></SectionTitle>
       <About/>
      <div>
        <div className="grid grid-cols-1">
          <div className="">
            <form className="grid grid-cols-6 gap-6">
              <div className="col-span-6 md:col-span-3">
                <input
                  className="w-full bg-[#13233fe9] rounded-rounded-10 py-4 px-6 text-slate-100 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-600"
                  type="text"
                  name="name1"
                  placeholder='First Name'
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <input
                  className="w-full bg-[#13233fe9] rounded-rounded-10 py-4 px-6 text-slate-100 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-600"
                  type="text"
                  name="name2"
                  placeholder='Last Name'
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <input
                  className="w-full bg-[#13233fe9] rounded-rounded-10 py-4 px-6 text-slate-100 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-600"
                  type="email"
                  name="email"
                  placeholder='Email'
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <input
                  className="w-full bg-[#13233fe9] rounded-rounded-10 py-4 px-6 text-slate-100 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-600"
                  type="text"
                  name="phone"
                  placeholder='Phone'
                />
              </div>
              <div className="col-span-6">
                <textarea name="message" rows="4"
                  className="w-full bg-[#13233fe9] rounded-rounded-10 py-4 px-6 text-slate-100 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-600"
                  placeholder="Message"></textarea>
              </div>
              <div className="col-span-6">
                <button
                  className="block border w-full py-4 text-xl leading-leading-30 font-semibold text-slate-100 bg-[#13233fe9]  rounded-rounded-10 border-gray-600"
                  type="submit"
                  onClick={handleSendMsg}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ContactPage;
