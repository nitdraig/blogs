import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export const SocialMedias = () => {
  return (
    <div className="flex  space-x-3">
      <a href="" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-[#0065B3] hover:text-[#000000]" size={50} />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-[#0065B3] hover:text-[#000000]" size={50} />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-[#0065B3] hover:text-[#000000]" size={50} />
      </a>

      {/* <a className="cursor-pointer" href="" target="">
        Contacto por Email
      </a> */}
    </div>
  );
};
