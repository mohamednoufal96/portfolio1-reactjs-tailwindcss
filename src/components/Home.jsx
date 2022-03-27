import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <div name="home" className=" w-full h-screen bg-[#0a192f] ">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
                <p className="text-pink-600 font-bold">Hi, my name is </p>
                <h1 className="text-4xl md:text-7xl font-bold text-[#d8dbdb] ">Mohamed Noufal</h1>
                <h2 className="text-4xl md:text-7xl font-bold text-[#9a9b9b] ">I'm a Full stack developer.</h2>
                <p className="text-[#9a9b9b] py-4  max-w-[700px] ">
                    Am an aspiring Full Stack web application developer with an experience of 6 months internship in Full
                    Stack web development. I am looking for a position to incorporate my skills and training to help the
                    company grow and which will also enhance my skills. Looking forward to roles that will help me
                    understand my potential by exploring the various aspects of this field.
                </p>
                <div>
                    <button className="text-white group flex items-center border-2 px-6 py-3  hover:bg-pink-600 hover:border-pink-600 ">
                        View Work
                        <span className="group-hover:rotate-90   duration-300">
                            <HiArrowNarrowRight className="ml-4" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
