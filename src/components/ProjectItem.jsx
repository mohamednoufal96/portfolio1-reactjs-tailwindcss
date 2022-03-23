import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";

const ProjectItem = () => {
    return (
        /* grid item */
        <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#0d151f] rounded-md container group flex justify-center items-center mx-auto content-div "
        >
            {/* hover effects */}
            <div className=" opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-bold text-white tracking-wider">React Js Application</span>

                <div className="text-center pt-4">
                    <a href="">
                        <button className="text-center rounded-lg px-4 py-2 m-3 bg-white text-gray-700 font-bold text-lg">
                            Demo
                        </button>
                    </a>
                    <a href="">
                        <button className="text-center rounded-lg px-4 py-2 m-3 bg-white text-gray-700 font-bold text-lg">
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
