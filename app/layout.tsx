import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Shubham Choubey | Full-Stack Developer",
  description: "Full-Stack Developer building scalable web applications with React, Next.js, and modern technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100`}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
