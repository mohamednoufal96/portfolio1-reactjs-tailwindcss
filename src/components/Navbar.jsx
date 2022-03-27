import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
            <div className="logo ">
                <Link to="home" smooth={true} duration={500}>
                    <p className="text-4xl font-bold text-pink-600 hover:cursor-pointer py-2 px-4">M N</p>
                </Link>
            </div>

            {/* menu */}
            <ul className="hidden md:flex">
                <li className="text-lg font-bold hover:border-b-2 hover:border-pink-600">
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="text-lg font-bold hover:border-b-2 hover:border-pink-600">
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="text-lg font-bold hover:border-b-2 hover:border-pink-600">
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="text-lg font-bold hover:border-b-2 hover:border-pink-600">
                    <Link to="works" smooth={true} duration={500}>
                        Works
                    </Link>
                </li>
                <li className="text-lg font-bold hover:border-b-2 hover:border-pink-600">
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}

            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleClick} to="works" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
                        <a
                            href="https://www.linkedin.com/in/mohamednoufal96/"
                            className="flex justify-between items-center w-full text-gray-300 "
                        >
                            Linkedin <FaLinkedin size="30" />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333] ">
                        <a
                            href="https://github.com/mohamednoufal96"
                            className="flex justify-between items-center w-full text-gray-300 "
                        >
                            Github <FaGithub size="30" />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#48db79] ">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="flex justify-between items-center w-full text-gray-300 "
                        >
                            Email <HiOutlineMail size="30" />
                        </Link>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a1a6a2] ">
                        <a href="/" className="flex justify-between items-center w-full text-gray-300 ">
                            Resume <BsFillPersonLinesFill size="30" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
