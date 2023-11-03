import "./globals.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

export const metadata = {
  title: "D' Blog",
  description: "For people who wants know too much",
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
