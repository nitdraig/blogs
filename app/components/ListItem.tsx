import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, image } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div className="mt-4 text-2xl text-black  ">
      <Link className=" hover:underline " href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm text-gray-700 ">{formattedDate}</p>
    </div>
  );
}
