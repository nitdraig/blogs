import { getLocale } from "@/lib/locale";
import { getMessages } from "@/lib/messages";
import AboutView from "../views/AboutView/AboutView";

export default async function AboutPage() {
  const locale = await getLocale();
  const messages = getMessages(locale);
  return <AboutView locale={locale} messages={messages} />;
}
