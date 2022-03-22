import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";

const Works = () => {
    return (
        <div name="works" className="w-full h-screen bg-[#0a192f] text-gray-300  ">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-screen ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-8 border-pink-600">Works</p>
                    <p className="py-6">// Check out some of my recent works</p>
                </div>

                {/* grid for card items */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* grid item */}
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="shadow-lg shadow-[#0d151f] rounded-md container group flex justify-center items-center mx-auto content-div "
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <div>
                                <p>React Js Application</p>
                            </div>
                            <div>
                                <a href="">
                                    <button>Demo</button>
                                </a>
                                <a href="">
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
