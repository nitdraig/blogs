import "./globals.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

const image =
  "https://res.cloudinary.com/draig/image/upload/v1701373459/portolio-personal/blog/images-open-graph/guldwxsz26pip5molour.png";
export const metadata = {
  title: "Agustín's Perceptions",
  description: "Un blog simple, corto y debatible sobre todo en el mundo IT",
  keywords: [
    "Agustín Avellaneda",
    "Desarrollador freelance",
    "Fullstack developer",
    "Desarrollo web",
    "Diseño web",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "SQL",
    "NoSQL",
    "Bases de datos",
    "Gestión de bases de datos",
    "Startup",
    "Emprendimiento",
    "Negocios",
    "Marketing",
    "Finanzas",
    "Contabilidad",
    "Legal",
    "Inteligencia Artificial",
    "Tecnologías emergentes",
    "Desarrollo de software",
    "Programación",
    "Código abierto",
    "Frameworks",
    "Desarrollo ágil",
    "Herramientas de desarrollo",
    "Experiencia de usuario",
    "Seguridad informática",
    "Internet de las cosas",
    "Cloud computing",
    "Arquitectura de software",
    "Desarrollo móvil",
    "Aplicaciones móviles",
    "Realidad aumentada",
    "Realidad virtual",
    "Ciberseguridad",
    "Blockchain",
    "Automatización",
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
      "Avellaneda Agustín | Desarrollador web Fullstack | Un blog simple, corto y debatible sobre todo en el mundo IT",
    description:
      "Avellaneda Agustín, Desarrollador web Fullstack | Un blog simple, corto y debatible sobre todo en el mundo IT",
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
      <link rel="canonical" href="https://es.blog.agustin.top" />
      <body className="bg-[#E9E9E9]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
