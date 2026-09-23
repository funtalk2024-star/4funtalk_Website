import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/HomescreenComponents'/Navbar";
import MetaPixel from "./Components/MetaPixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "4FunTalk",
  description:
    "4FunTalk is an online platform for counseling sessions, virtual consultations, and anonymous chat spaces focused on emotional well-being and relaxation. Mind Free Talk, Live Better.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MetaPixel />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
