import Posts from "@/app/components/Posts";
import React from "react";

const BlogView = () => {
  return (
    <section className="mx-auto flex max-w-2xl flex-col px-6 py-10 md:px-0 lg:px-8">
      <h2 className="text-4xl font-bold text-black">All My Posts</h2>
      <Posts />
    </section>
  );
};

export default BlogView;
