import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Jiranat Pattanasintara - Full-Stack Web Developer",
  description: "Professional full-stack web developer specializing in React, Next.js, WordPress, and custom web solutions. Building digital experiences that drive results for businesses.",
  keywords: "web developer, full-stack developer, React, Next.js, WordPress, JavaScript, portfolio, freelance developer",
  openGraph: {
    title: "Jiranat Pattanasintara - Web Developer",
    description: "Professional full-stack web developer creating custom web solutions",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
