import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Bootstrap from "../assets/bootstrap.png";

const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center">
                <div>
                    <p className="text-4xl font-bold   inline border-b-4 border-pink-600 ">Skills</p>
                    <p className="py-4">// These are the technologies I have worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-center">
                    <div className="shadow-md shadow-[#110b0b] hover:scale-110 duration-500 ">
                        <img className="w-12 mx-auto " src={HTML} alt="Logo image" />
                        <p className="my-2">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#110b0b] hover:scale-110 duration-500 ">
                        <img className="w-12 mx-auto " src={CSS} alt="Logo image" />
                        <p className="my-2">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#110b0b] hover:scale-110 duration-500 ">
                        <img className="w-12 mx-auto " src={Bootstrap} alt="Logo image" />
                        <p className="my-2">BOOTSTRAP </p>
                    </div>
                    <div className="shadow-md shadow-[#110b0b] hover:scale-110 duration-500 ">
                        <img className="w-12 mx-auto " src={Tailwind} alt="Logo image" />
                        <p className="my-2">TAILWIND</p>
                    </div>
                    <div className="shadow-md shadow-[#110b0b] hover:scale-110 duration-500 ">
                        <img className="w-12 mx-auto " src={JavaScript} alt="Logo image" />
                        <p className="my-2">JAVASCRIPT</p>
                    </div>
                    <div className="shadow-md shadow-[#110b0b] hover:scale-110 duration-500 ">
                        <img className="w-12 mx-auto " src={ReactImg} alt="Logo image" />
                        <p className="my-2">REACT JS</p>
                    </div>
                    <div className="shadow-md shadow-[#110b0b] hover:scale-110 duration-500 ">
                        <img className="w-12 mx-auto " src={Node} alt="Logo image" />
                        <p className="my-2">NODE JS</p>
                    </div>
                    <div className="shadow-md shadow-[#110b0b] hover:scale-110 duration-500 ">
                        <img className="w-12 mx-auto " src={Mongo} alt="Logo image" />
                        <p className="my-2">MONGODB</p>
                    </div>
                    <div className="shadow-md shadow-[#110b0b] hover:scale-110 duration-500 ">
                        <img className="w-12 mx-auto " src={FireBase} alt="Logo image" />
                        <p className="my-2">FIREBASE</p>
                    </div>
                    <div className="shadow-md shadow-[#110b0b] hover:scale-110 duration-500 ">
                        <img className="w-12 mx-auto " src={GitHub} alt="Logo image" />
                        <p className="my-2">GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
