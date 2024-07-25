"use client";

import React, { useState } from "react";
import CardLastPosts from "@/app/components/lastItems/CardLastPosts";

type Post = {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
};

type PostsFilterProps = {
  posts?: Post[];
};

const PostsFilter: React.FC<PostsFilterProps> = ({ posts = [] }) => {
  const categories = [
    "Recientes",
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];
  const [selectedCategory, setSelectedCategory] = useState("Recientes");

  const filteredPosts =
    selectedCategory === "Recientes"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, 6);

  return (
    <>
      <div className="mb-4">
        <select
          className="bg-white transition-all duration-[250ms] ease-out border border-gray-300 rounded-md py-2 px-3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row flex-wrap justify-center space-x-4">
        {displayedPosts.map((post, index) => (
          <CardLastPosts key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostsFilter;
