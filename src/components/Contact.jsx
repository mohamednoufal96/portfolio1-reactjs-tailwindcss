import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen   bg-[#0a192f] text-gray-300 flex justify-center  items-center px-4">
            <form action="" className="max-w-[600px] w-full  flex flex-col justify-center ">
                <div className="pb-8">
                    <p className="text-4xl inline border-b-4 border-pink-600 font-bold text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">
                        //Submit the form below or shoot me an email -{" "}
                        <span className="text-gray-300 ">mohamednoufal.live@gmail.com</span>
                    </p>
                </div>
                <input
                    type="text"
                    className="bg-[#cccbcb] my-3 p-2  outline-0 focus:text-gray-600 "
                    placeholder="Name"
                    name="name"
                />
                <input type="email" className="bg-[#cccbcb] my-3 p-2  outline-0 " placeholder="Email" name="email" />
                <textarea
                    className="bg-[#cccbcb] my-3 p-2  outline-0"
                    placeholder="Message"
                    name="Meassage"
                    id=""
                    cols="30"
                    rows="5"
                ></textarea>
                <button className="text-white px-6 py-3 hover:bg-pink-600 hover:border-pink-600 font-bold ">
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
};

export default Contact;
