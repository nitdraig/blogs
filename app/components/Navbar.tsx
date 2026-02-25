"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLocale } from "@/app/LocaleProvider";
import type { Messages } from "@/lib/messages";

export default function Navbar({ messages }: { messages: Messages }) {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const otherLocale = locale === "en" ? "es" : "en";

  return (
    <nav className="bg-[#212529] text-white w-screen">
      <div className="flex justify-between items-center h-20 px-5 xl:px-12 w-full">
        <div className="flex items-center lg:space-x-8 space-x-4">
          <a className="text-3xl font-bold font-heading hover:scale-110" href="/">
            <img
              className="w-20 h-20 invert"
              src="https://res.cloudinary.com/draig/image/upload/v1699045270/portolio-personal/jlcdcijnaqntxa7t4jns.png"
              alt="Agustin Avellaneda"
            />
          </a>
          <a href="/about" className="hover:underline hover:scale-110">
            {messages.nav.about}
          </a>
          <a
            className="hover:underline hover:scale-110"
            href="https://www.agustin.top"
            target="_blank"
            rel="noopener noreferrer"
          >
            {messages.nav.portfolio}
          </a>
          <button
            type="button"
            onClick={() => setLocale(otherLocale, pathname)}
            className="hover:underline hover:scale-110 flex items-center gap-0.5 rounded-full border-1 border-white "
            aria-label={locale === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
          >
            {locale === "en" ? (
              <>
                <img src="/flag-arg.svg" alt="Spanish" className="w-6 h-6 rounded-full " />

              </>
            ) : (
              <>
                <img src="/flag-usa.svg" alt="English" className="w-6 h-6 rounded-full" />
              </>
            )}
          </button>
        </div>
        <div className="hidden lg:flex space-x-5 items-center">
          <a
            href="https://www.github.com/nitdraig"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:scale-125" size={30} />
          </a>
          <a
            href="https://twitter.com/nitdraig"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:scale-125" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/avellaneda-agust%C3%ADn-tns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:scale-125" size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
}
