import getFormattedDate from "@/lib/getFormattedDate";
import { getLocale } from "@/lib/locale";
import { getMessages } from "@/lib/messages";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import ShareButtonSection from "@/app/components/ShareButtonSection";
import { PostCover } from "@/app/components/PostCover";

const BASE_URL =
  process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.agustin.top";
const DEFAULT_OG_IMAGE = "/og-image.png";

export async function generateStaticParams() {
  const enPosts = getSortedPostsData("en");
  const esPosts = getSortedPostsData("es");
  const ids = new Set([...enPosts.map((p) => p.id), ...esPosts.map((p) => p.id)]);
  return Array.from(ids).map((postId) => ({ postId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const locale = await getLocale();
  const messages = getMessages(locale);
  const posts = getSortedPostsData(locale);
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return { title: messages.post.notFound };
  }
  return {
    title: post.title,
    openGraph: {
      title: post.title,
      url: `${BASE_URL}/posts/${postId}`,
      images: [{ url: DEFAULT_OG_IMAGE, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const locale = await getLocale();
  const messages = getMessages(locale);
  const posts = getSortedPostsData(locale);
  const postData = await getPostData(postId, locale);

  if (!postData) notFound();

  const { title, date, contentHtml } = postData;
  const postUrl = `${BASE_URL}/posts/${postId}`;

  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <PostCover postId={postId} title={title} date={date} />

          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <article>
              <section
                className="space-y-4"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
              <p className="text-md font-bold mt-10 mb-6">
                {messages.post.sharePrompt}
              </p>
              <ShareButtonSection
                postUrl={postUrl}
                title={title}
                shareInviteText={messages.share.invite}
              />
            </article>
          </div>
          <div className="max-w-screen-md mx-auto mt-10 mb-10">
            <Link href="/blog">
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-[#0065B3] transition-all duration-[250ms] ease-out group-hover:w-full" />
                <span className="relative text-black group-hover:text-white">
                  {messages.blog.allPosts}
                </span>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
}
