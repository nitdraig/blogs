"use client";
import React, { useState } from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#212529] text-white w-screen">
      <div className="flex justify-between items-center h-20 px-5 xl:px-12 w-full">
        <div className="flex items-center lg:space-x-8 space-x-4">
          <a
            className="text-3xl font-bold font-heading hover:scale-110"
            href="/"
          >
            <img
              className="w-28 h-20 invert"
              src="https://res.cloudinary.com/draig/image/upload/v1699045270/portolio-personal/jlcdcijnaqntxa7t4jns.png"
              alt="logo"
            />
          </a>

          <a href="/about" className=" hover:underline   hover:scale-110">
            About Me
          </a>

          <a
            className=" hover:underline   hover:scale-110"
            href="https://www.agustin.top"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
          <a
            className=" hover:underline hover:scale-110"
            href="https://es.blog.agustin.top"
          >
            ES<span className="text-[#0065B3]">/EN</span>
          </a>
        </div>
        {/* <div className="lg:hidden flex space-x-5 items-center">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            ☰
          </button>
        </div> */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 right-0 bg-[#212529]/60 p-20 w-48 py-2 space-y-2 text-center shadow">
            <a
              href="https://www.github.com/nitdraig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="  hover:scale-125" size={30} />
            </a>
            <a
              href="https://twitter.com/nitdraig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="  hover:scale-125" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/avellaneda-agust%C3%ADn-tns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="  hover:scale-125" size={30} />
            </a>
          </div>
        )}
        <div className="hidden lg:flex space-x-5 items-center">
          <a
            href="https://www.github.com/nitdraig"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="  hover:scale-125" size={30} />
          </a>
          <a
            href="https://twitter.com/nitdraig"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="  hover:scale-125" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/avellaneda-agust%C3%ADn-tns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="  hover:scale-125" size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
}
