import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Jiranat Pattanasintara | Full-Stack Developer",
  description: "Full-Stack Developer based in Thailand building web applications, data-driven systems, decentralized applications, and software products.",
  keywords: "web developer, full-stack developer, React, Next.js, WordPress, JavaScript, portfolio",
  openGraph: {
    title: "Jiranat Pattanasintara | Full-Stack Developer",
    description: "Full-Stack Developer based in Thailand building web applications, data-driven systems, decentralized applications, and software products.",
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
