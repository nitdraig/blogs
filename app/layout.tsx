import "./globals.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Agustín' Perceptions",
  description: "Un blog simple, corto y debatible sobre todo el mundo IT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#E9E9E9]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
