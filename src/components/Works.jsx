import React from "react";
import ProjectItem from "./ProjectItem";

const Works = () => {
    return (
        <div name="works" className="w-full md:h-screen  bg-[#0a192f] text-gray-300  ">
            {/* container */}
            <div className="max-w-[1000px] pt-8  mx-auto px-4 flex flex-col justify-center w-full h-full  ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-8 border-pink-600">Works</p>
                    <p className="py-6">// Check out some of my recent works</p>
                </div>

                {/* grid for card items */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </div>
    );
};

export default Works;
