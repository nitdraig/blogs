import "./globals.css";
import { getLocale } from "@/lib/locale";
import { getMessages } from "@/lib/messages";
import { LocaleProvider } from "./LocaleProvider";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

const BASE_URL =
  process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.agustin.top";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/draig/image/upload/v1724254365/portolio-personal/blog/images-open-graph/rab00fyxg7jioeg2mvfe.png";

export async function generateMetadata() {
  const locale = await getLocale();
  const isEn = locale === "en";
  return {
    title: "Agustín's Perceptions",
    description: isEn
      ? "A simple, short and debatable blog about everything in the IT world"
      : "Un blog simple, corto y debatible sobre todo en el mundo IT",
    keywords: isEn
      ? ["Agustín Avellaneda", "Freelance developer", "Fullstack developer", "Web development"]
      : ["Agustín Avellaneda", "Desarrollador freelance", "Fullstack developer", "Desarrollo web"],
    openGraph: { images: DEFAULT_IMAGE },
    twitter: {
      card: "summary_large_image",
      title: "Agustín's Perceptions",
      images: [DEFAULT_IMAGE],
    },
    metadataBase: new URL(BASE_URL),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = getMessages(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="canonical" href={BASE_URL} />
      </head>
      <body className="bg-[#E9E9E9]">
        <LocaleProvider initialLocale={locale}>
          <Navbar messages={messages} />
          {children}
          <Footer messages={messages} />
        </LocaleProvider>
      </body>
    </html>
  );
}
