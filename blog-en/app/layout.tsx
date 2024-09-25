import "./globals.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

const image =
  "https://res.cloudinary.com/draig/image/upload/v1724254365/portolio-personal/blog/images-open-graph/rab00fyxg7jioeg2mvfe.png";
export const metadata = {
  title: "Agustín's Perceptions",
  description:
    "A simple, short and debatable blog about everything in the IT world",
  keywords: [
    "Agustín Avellaneda",
    "Freelance developer",
    "Fullstack developer",
    "Web development",
    "Web design",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "SQL",
    "NoSQL",
    "Databases",
    "Database management",
    "Startup",
    "Entrepreneurship",
    "Business",
    "Marketing",
    "Finance",
    "Accounting",
    "Legal",
    "Artificial intelligence",
    "Emerging technologies",
    "Software development",
    "Programming",
    "Open source",
    "Frameworks",
    "Agile development",
    "Development tools",
    "User experience",
    "Computer security",
    "Internet of things",
    "Cloud computing",
    "Software architecture",
    "Mobile development",
    "Mobile applications",
    "Augmented reality",
    "Virtual reality",
    "Cybersecurity",
    "Blockchain",
    "Automation",
    "Scrum",
    "Git",
  ],
  ogImage: image,
  images: [
    {
      url: image,
      width: 800,
      height: 600,
      alt: "Avellaneda Agustín, Desarrollador web Fullstack",
      name: "avellaneda-agustin-fullstack-developer.png",
    },
    {
      url: image,
      width: 1800,
      height: 1600,
      alt: "Avellaneda Agustín",
      name: "avellaneda-agustin.png",
    },
  ],
  twitter: {
    card: "summary_large_image",
    title:
      "Avellaneda Agustín | Fullstack Web Developer | A simple, short and debatable blog about everything in the IT world",
    description:
      "Avellaneda Agustín, Fullstack Web Developer | A simple, short and debatable blog about everything in the IT world",
    creator: "Avellaneda Agustín",
    images: [image],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },

  openGraph: {
    images: image,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="canonical" href="https://en.blog.agustin.top" />
      <body className="bg-[#E9E9E9]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
