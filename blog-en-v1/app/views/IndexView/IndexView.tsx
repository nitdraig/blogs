import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import PostsFilter from "./components/PostsFilter";

const IndexView = () => {
  const posts = getSortedPostsData();
  return (
    <section className="lg:px-10 px-2 pt-4 pb-8">
      <div className="mx-auto flex flex-col items-center space-y-8">
        <img
          className="w-28"
          src="https://res.cloudinary.com/draig/image/upload/v1688835318/profile-pic_2_pxpzfg.png"
          alt="Profile"
        />
      </div>
      <div className="flex flex-col space-y-4 text-center">
        <h2 className="text-[#212529] mx-auto text-2xl font-bold tracking-tight lg:text-3xl">
          Bienveni@ a este espacio de reflexión
        </h2>
        <div className="flex flex-col sm:flex-row sm:space-x-3 sm:space-y-0 space-y-3 justify-center">
          <a
            className="bg-[#212529] text-white hover:bg-[#212529]/70 py-2 px-3 rounded-md"
            href="/about"
          >
            Acerca de mí
          </a>
          <a
            className="bg-[#212529] text-white hover:bg-[#212529]/70 py-2 px-6 rounded-md"
            href="https://agustin.top/#contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
        </div>
        <h3 className="text-[#212529] mx-auto text-md font-bold tracking-tight lg:text-lg">
          Mis posts:
        </h3>
        <PostsFilter posts={posts} />
        <div className="max-w-screen-md mx-auto mt-10 mb-10">
          <a href="/blog">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-[#0065B3] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-[#212529] group-hover:text-white">
                Ver todos los posts
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndexView;
