import React from "react";

const CardLastPosts = ({ post }: any) => {
  const { id, title, date, image, category } = post;
  return (
    <div className="py-4">
      <a href={`/posts/${id}`} className="block max-w-xs  overflow-hidden">
        <div className="w-full  bg-cover min-h-64">
          <img
            src={image}
            className=" w-96 h-36 text-center object-cover shadow-md scale-100 hover:scale-110 transition duration-[1.5s] rounded-md"
            alt={title}
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <span className="text-gray-500  text-xs uppercase">{category}</span>
          <h3 className="text-gray-900 font-bold text-lg mt-1 hover:underline">
            {title}
          </h3>
          <span className="text-gray-800 text-sm">Posteado el: {date}</span>
        </div>
      </a>
    </div>
  );
};

export default CardLastPosts;
