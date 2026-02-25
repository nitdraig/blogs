import { getLocale } from "@/lib/locale";
import { getMessages } from "@/lib/messages";
import Link from "next/link";

export default async function NotFound() {
  const locale = await getLocale();
  const messages = getMessages(locale);
  return (
    <div className="max-w-screen-md mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-gray-800">{messages.post.notFound}</h1>
      <Link
        href="/blog"
        className="mt-4 inline-block text-[#0065B3] hover:underline"
      >
        {messages.blog.allPosts}
      </Link>
    </div>
  );
}
