import { getLocale } from "@/lib/locale";
import BlogView from "../views/BlogView/BlogView";

export default async function BlogPage() {
  const locale = await getLocale();
  return (
    <>
      <BlogView locale={locale} />
    </>
  );
}
