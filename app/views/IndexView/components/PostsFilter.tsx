"use client";

import React, { useState } from "react";
import CardLastPosts from "@/app/components/lastItems/CardLastPosts";
import type { Messages } from "@/lib/messages";

type Post = {
  id: string;
  title: string;
  date: string;
  image?: string;
  category: string;
};

type Props = {
  posts: Post[];
  messages: Messages;
};

export default function PostsFilter({ posts = [], messages }: Props) {
  const recentLabel = messages.filter.recent;
  const categories = [
    recentLabel,
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];
  const [selectedCategory, setSelectedCategory] = useState(recentLabel);

  const filteredPosts =
    selectedCategory === recentLabel
      ? posts
      : posts.filter((p) => p.category === selectedCategory);
  const displayedPosts = filteredPosts.slice(0, 6);

  return (
    <>
      <div className="mb-4">
        <select
          className="bg-white transition-all duration-[250ms] ease-out border border-gray-300 rounded-md py-2 px-3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row flex-wrap justify-center space-x-4">
        {displayedPosts.map((post, index) => (
          <CardLastPosts key={post.id} post={post} messages={messages} />
        ))}
      </div>
    </>
  );
}
