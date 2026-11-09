import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-portfolio",
});

export const metadata = {
  title: "Jiranat Pattanasintara | Full-Stack Developer",
  description:
    "Full-Stack Developer based in Thailand building web applications, data-driven systems, decentralized applications, and software products.",
  keywords:
    "web developer, full-stack developer, React, Next.js, WordPress, JavaScript, portfolio",
  openGraph: {
    title: "Jiranat Pattanasintara | Full-Stack Developer",
    description:
      "Full-Stack Developer based in Thailand building web applications, data-driven systems, decentralized applications, and software products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${manrope.className}`}>
        {children}
      </body>
    </html>
  );
}
