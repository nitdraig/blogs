import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#212529]">
      <div className="max-w-2xl mx-auto text-white pt-16">
        <div className="text-center">
          <p> We are here to do something special</p>
          <div className="pt-3 pb-3 items-center text-sm text-gray-400">
            <a
              className="order-2 md:order-1 mt-8 md:mt-0"
              href=" #"
              target="blank"
            >
              Make with &hearts; for Avellaneda Agustín. &copy; 2023
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
