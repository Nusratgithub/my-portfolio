import React from "react";
import SectionTitle from "../SectionTItle/SectionTitle";
import "./Contact.css";

const Contact = () => {
    const handleSendMsg = () => {
        alert("user send msg successfully");

    };
    return (
        <div className="contact container mx-auto ">
            <SectionTitle title="Contact me"></SectionTitle>

            <div>
                <div className="grid grid-cols-1">
                    <div className="mt-10 lg:mx-0 mx-2">
                        <form className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 md:col-span-3">
                                <input
                                    className="w-full bg-transparent rounded-rounded-10 py-4 px-6 text-slate-100 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-600"
                                    type="text"
                                    name="name"
                                    placeholder='Your Name'
                                />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                                <input
                                    className="w-full bg-transparent rounded-rounded-10 py-4 px-6 text-slate-100 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-600"
                                    type="email"
                                    name="email"
                                    placeholder='Your Email'
                                />
                            </div>
                            <div className="col-span-6">
                                <textarea name="message" rows="4" className="w-full bg-transparent rounded-rounded-10 py-4 px-6 text-slate-100 placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border border-gray-600" placeholder="Your Message"></textarea>
                            </div>
                            <div className="col-span-6">
                                <button
                                    className="block w-full py-4 text-xl leading-leading-30 font-semibold text-slate-100 bg-gray-800  rounded-rounded-10"
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

export default Contact;
