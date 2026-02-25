import { getSortedPostsData } from "@/lib/posts";
import type { Locale } from "@/lib/locale";
import ListItem from "./ListItem";

export default function Posts({ locale }: { locale: Locale }) {
  const posts = getSortedPostsData(locale);

  return (
    <section className="mt-6 mx-auto max-w-2xl h-full">
      <ul className="w-full">
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              borderBottom: "1px solid #0065B3",
              paddingBottom: "1.5em",
            }}
          >
            <ListItem post={post} locale={locale} />
          </li>
        ))}
      </ul>
    </section>
  );
}
