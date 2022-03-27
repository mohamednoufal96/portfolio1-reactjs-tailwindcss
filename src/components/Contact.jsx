import React from "react";

const Contact = () => {
    return (
        <div name="contact" id="contact" className="w-full h-screen   bg-[#0a192f]  flex justify-center  items-center px-4">
            <form
                method="POST"
                action="https://getform.io/f/fb2d4ec1-de35-48b9-9390-67d9fc1a757d"
                className="max-w-[600px] w-full h-full  flex flex-col justify-center "
            >
                <div className="pb-3">
                    <p className="text-4xl inline border-b-4  border-pink-600 font-bold text-gray-300">Contact</p>
                    <p className=" text-gray-300 mt-5">
                        // Submit the form below or shoot me an email -{" "}
                        <span className="font-bold">mohamednoufal.live@gmail.com</span>
                    </p>
                </div>
                <input type="text" className="bg-[#ccd6f6] my-3 p-2  outline-0  " placeholder="Name" name="name" />
                <input type="email" className="bg-[#ccd6f6] my-3 p-2  outline-0 " placeholder="Email" name="email" />
                <textarea
                    className="bg-[#ccd6f6] my-3 p-2  outline-0"
                    placeholder="Message"
                    name="Meassage"
                    id=""
                    cols="30"
                    rows="5"
                ></textarea>
                <button className=" text-white my-3 border-2 px-6 py-3 hover:bg-pink-600 hover:border-pink-600 font-bold mx-auto  ">
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
};

export default Contact;
