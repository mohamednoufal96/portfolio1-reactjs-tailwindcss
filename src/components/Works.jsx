import React from "react";
import { projects } from "../costants";
import ProjectItem from "./ProjectItem";

const Works = () => {
    return (
        <div name="works" className="w-full md:h-screen  bg-[#0a192f] text-gray-300  ">
            {/* container */}
            <div className="max-w-[1000px] py-3  mx-auto px-2 flex flex-col justify-center w-full h-full  ">
                <div>
                    <p className="text-4xl font-bold inline border-b-8 border-pink-600">Works</p>
                    <p className="mt-5 mb-3">// Check out some of my recent works</p>
                </div>

                {/* grid for card items */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map(({ id, title, image, demo, source }) => {
                        return <ProjectItem key={id} title={title} image={image} demo={demo} source={source} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Works;
