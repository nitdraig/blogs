"use client";
import React, { useState } from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#212529] text-white w-screen">
      <div className="flex justify-between items-center h-20 px-5 xl:px-12 w-full">
        <a className="text-3xl font-bold font-heading" href="/">
          <img
            className="h-8"
            src="https://res.cloudinary.com/dcu06etml/image/upload/v1689136915/portolio-personal/wlzilhijvqqsckwgrtf7.png"
            alt="logo"
          />
        </a>

        <div className="hidden lg:flex space-x-8">
          <a href="/" className="hover:text-[#0065B3]">
            Home
          </a>

          <a href="/blog" className="hover:text-[#0065B3]">
            Blog
          </a>

          <a
            className="hover:text-[#0065B3]"
            href="https://www.agustin.top"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi portfolio
          </a>
        </div>

        <div className="lg:hidden flex space-x-5 items-center">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 right-0 bg-[#212529] w-48 py-2 space-y-2 text-center shadow">
            <Link className="block hover:text-[#0065B3]" href="/">
              Home
            </Link>
            <Link className="block hover:text-[#0065B3]" href="/blog">
              Blog
            </Link>
            <Link
              href="https://www.agustin.top"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#0065B3]"
            >
              Mi portfolio
            </Link>
          </div>
        )}

        <div className="hidden lg:flex space-x-5 items-center">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-[#0065B3]" size={30} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-[#0065B3]" size={30} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-[#0065B3]" size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
}
