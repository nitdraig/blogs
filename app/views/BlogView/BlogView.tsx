import Posts from "@/app/components/Posts";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locale";

export default function BlogView({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <section className="mx-auto flex max-w-2xl flex-col px-6 py-10 md:px-0 lg:px-8">
      <h2 className="text-4xl font-bold text-black">{messages.blog.title}</h2>
      <Posts locale={locale} />
    </section>
  );
}
