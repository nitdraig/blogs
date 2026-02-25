import getFormattedDate from "@/lib/getFormattedDate";
import type { Locale } from "@/lib/locale";

type Props = { post: BlogPost; locale: Locale };

export default function ListItem({ post, locale }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date, locale);

  return (
    <div className="mt-4 text-2xl text-black">
      <a className="hover:underline" href={`/posts/${id}`}>
        {title}
      </a>
      <br />
      <p className="text-sm text-gray-700">{formattedDate}</p>
    </div>
  );
}
