import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml, image } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src={image}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                {title}
              </h2>
              <div className="flex mt-3">
                <img
                  src="https://res.cloudinary.com/dcu06etml/image/upload/v1688838012/portolio-personal/cdyhbynxunvqlfa181ip.png"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    Avellaneda Agustín
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">{date}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <article>
              <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
          </div>
          <div className="max-w-screen-md mx-auto mt-10 mb-10">
            <Link href="/blog">
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-[#0065B3 ] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Volver a Blog
                </span>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
}
