import type { Messages } from "@/lib/messages";
import { getCoverGradient } from "@/lib/coverPalette";

type Props = {
  post: BlogPost;
  messages: Messages;
};

export default function CardLastPosts({ post, messages }: Props) {
  const { id, title, date, category } = post;
  const gradient = getCoverGradient(id);
  return (
    <div className="py-4">
      <a href={`/posts/${id}`} className="block max-w-xs overflow-hidden">
        <div
          className="w-96 h-36 rounded-md shadow-md flex items-end p-3 transition duration-[1.5s] hover:scale-[1.02]"
          style={{ background: gradient }}
        >
          <span className="text-white font-semibold text-sm line-clamp-2 drop-shadow-md">
            {title}
          </span>
        </div>
        <div className="p-4">
          <span className="text-gray-500 text-xs uppercase">{category}</span>
          <h3 className="text-gray-900 font-bold text-lg mt-1 hover:underline">
            {title}
          </h3>
          <span className="text-gray-800 text-sm">
            {messages.post.postedOn} {date}
          </span>
        </div>
      </a>
    </div>
  );
}
