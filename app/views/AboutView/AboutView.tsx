import { projects } from "@/lib/projects";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutView = () => {
  return (
    <section className="lg:px-10 px-2 pt-4 pb-8">
      <div className="mx-auto flex flex-col items-center space-y-8">
        <img
          className="w-28"
          src="https://res.cloudinary.com/draig/image/upload/v1688835318/profile-pic_2_pxpzfg.png"
          alt="Profile"
        />
      </div>
      <div className="flex h-full mx-auto flex-col space-y-4 text-center">
        <div className="lg:mx-auto mx-4  lg:my-0 mt-4 text-gray-900 lg:text-lg text-md">
          <p>
            Soy Agustín, Project Manager & Fullstack Web Developer 🌐 y mi foco
            es crear productos estrellas.
            <br />
            Lidero equipos de alto rendimiento y enfocados en agile.
            <br />
            Gamer ocasional, productor musical, y amante del mundo audiovisual.
          </p>
        </div>
        <span className="font-bold">Algunos de mis proyectos:⭐</span>
        <div className="text-md ">
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mx-10">
            {projects.map((project, index) => (
              <div key={index} className="flex mx-10 flex-col items-center">
                <a href={project.link} target="_blank">
                  <img
                    src={project.image}
                    alt={`${project.name} Icon`}
                    className="mb-2 w-16"
                  />
                </a>
                <p>
                  <strong className="uppercase">{project.name}</strong>
                  <br />
                  <span className="text-sm">{project.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-md">Puedes contactarme por mis redes. ;)</p>
          <div className="flex justify-center mt-4 space-x-5">
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
          <div className="mt-4 flex justify-center">
            <a href="/blog">
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-[#0065B3] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Ver posts
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutView;
