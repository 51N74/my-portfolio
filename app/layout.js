import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jiranat Web Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en" data-theme="dim">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />
        
          {/* Main Content */}
          <main className=" w-full ml-96 flex-1 overflow-auto p-6 bg-gradient-to-b from-[#2C3F6D] to-[#182848]">
            {children}
          </main>
        </div>
      </body>
    </html>
    </>
  );
}
