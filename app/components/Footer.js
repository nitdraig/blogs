import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#212529] w-screen">
      <div className=" text-white pt-8">
        <div className="text-center">
          <p className="italic">
            Looking for the good in our fellow men will help us find the good in
            ourselves - Plato
          </p>
          <div className="pt-3 pb-3 items-center text-sm  hover:scale-110 text-gray-400 ">
            <a
              className="order-2 md:order-1 mt-8 md:mt-0 "
              href="https://www.linkedin.com/in/avellaneda-agust%C3%ADn-tns"
              target="blank"
            >
              Make with <span className="text-red-800 text-lg">♥</span> for
              Avellaneda Agustín. &copy; 2024
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
