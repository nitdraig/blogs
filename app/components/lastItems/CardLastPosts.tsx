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
      <a
        href={`/posts/${id}`}
        className="flex flex-col h-[17rem] max-w-xs w-96 rounded-xl border border-gray-300 bg-white shadow-md overflow-hidden transition duration-[1.5s] hover:scale-[1.02] hover:shadow-lg"
      >
        <div
          className="h-28 flex-shrink-0 flex items-center justify-start p-3 text-left"
          style={{ background: gradient }}
        >
          <span className="text-white font-semibold text-xs line-clamp-4 drop-shadow-md break-words w-full leading-snug">
            {title}
          </span>
        </div>
        <div className="flex-1 min-h-0 p-4 border-t border-gray-100 flex flex-col">
          <span className="text-gray-500 text-xs uppercase">{category}</span>
          <h3 className="text-gray-900 font-bold text-lg mt-1 hover:underline line-clamp-2">
            {title}
          </h3>
          <span className="text-gray-800 text-sm mt-auto">
            {messages.post.postedOn} {date}
          </span>
        </div>
      </a>
    </div>
  );
}
