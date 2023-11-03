import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, image } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl text-black">
      <Link className="underline hover:text-[#2b347d]" href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
      <img className="h-10 w-10" src={image} />
    </li>
  );
}
