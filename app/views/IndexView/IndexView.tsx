import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locale";
import PostsFilter from "./components/PostsFilter";

export default function IndexView({ locale }: { locale: Locale }) {
  const posts = getSortedPostsData(locale);
  const messages = getMessages(locale);

  return (
    <section className="lg:px-10 px-2 pt-4 pb-8 min-h-screen">
      <div className="mx-auto flex flex-col items-center space-y-8">
        <img
          className="w-28 rounded-full"
          src="/profile.webp"
          alt="Profile"
        />
      </div>
      <div className="flex flex-col space-y-4 text-center">
        <h2 className="text-[#212529] mx-auto text-2xl font-bold tracking-tight lg:text-3xl">
          {messages.home.welcome}
        </h2>
        <div className="flex flex-col sm:flex-row sm:space-x-3 sm:space-y-0 space-y-3 justify-center">
          <a
            className="bg-[#212529] text-white hover:bg-[#212529]/70 py-2 px-3 rounded-md"
            href="/about"
          >
            {messages.home.aboutMe}
          </a>
          <a
            className="bg-[#212529] text-white hover:bg-[#212529]/70 py-2 px-6 rounded-md"
            href="https://agustin.top/#contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            {messages.home.contact}
          </a>
        </div>
        <h3 className="text-[#212529] mx-auto text-md font-bold tracking-tight lg:text-lg">
          {messages.home.myPosts}
        </h3>
        <PostsFilter posts={posts} messages={messages} />
        <div className="max-w-screen-md mx-auto mt-10 mb-10">
          <a href="/blog">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-[#0065B3] transition-all duration-[250ms] ease-out group-hover:w-full" />
              <span className="relative text-[#212529] group-hover:text-white">
                {messages.home.seeAllPosts}
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
