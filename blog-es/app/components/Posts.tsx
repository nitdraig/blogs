import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl h-full">
      <ul className="w-full">
        {posts.map((post, index) => (
          <li
            key={post.id}
            style={{
              borderBottom: "1px solid #0065B3",
              paddingBottom: "1.5em",
            }}
          >
            <ListItem post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
