"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");
  // Update the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 50 &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle menu click with smooth scrolling
  const handleMenuClick = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
    setActiveSection(section);
  };

  return (
    <nav className=" h-full bg-base-200 fixed top-0 left-0 w-1/3 bg-gradient-to-b from-[#2C3F6D] to-[#182848]">
      <div className="flex flex-col justify-between h-full p-4">
        <div>
          {/* profile */}
          <div className="m-6 space-y-2 mb-16">
            <h1 className="text-3xl font-bold">Jiranat Pattanasintara</h1>
            <h4 className="text-xl font-bold">Web Developer</h4>
            <p className="text-l">
              Full-time WordPress Developer with experience in front-end and
              full-stack development currently exploring Next.js. Skilled in
              time management and prioritizing
            </p>
          </div>

          {/* menu */}
          <div className="m-6 mb-16">
            <ul className="space-y-6 text-xs">
              <li
                className={`flex items-center space-x-4 group cursor-pointer ${
                  activeSection === "about" ? "font-bold text-white" : ""
                }`}
                onClick={() => handleMenuClick("about")}
              >
                <span
                  className={`w-10 h-[1px] group-hover:w-20 ${
                    activeSection === "about" ? "bg-white w-20" : "bg-gray-500"
                  } transition-all`}
                ></span>
                <span>ABOUT</span>
              </li>
              <li
                className={`flex items-center space-x-4 group cursor-pointer ${
                  activeSection === "experience" ? "font-bold text-white" : ""
                }`}
                onClick={() => handleMenuClick("experience")}
              >
                <span
                  className={`w-10 h-[1px] group-hover:w-20 ${
                    activeSection === "experience"
                      ? "bg-white w-20"
                      : "bg-gray-500"
                  } transition-all`}
                ></span>
                <span>EXPERIENCE</span>
              </li>
              <li
                className={`flex items-center space-x-4 group cursor-pointer ${
                  activeSection === "projects" ? "font-bold text-white" : ""
                }`}
                onClick={() => handleMenuClick("projects")}
              >
                <span
                  className={`w-10 h-[1px] group-hover:w-20 ${
                    activeSection === "projects"
                      ? "bg-white w-20"
                      : "bg-gray-500"
                  } transition-all`}
                ></span>
                <span>PROJECTS</span>
              </li>
            </ul>
          </div>

          {/* social */}
          <div className="m-6 mt-16">
            <div className=" flex flex-row space-x-4">
              <Link href="https://github.com/51N74" target="_blank">
                <img
                  src="/github-mark/github-mark-white.svg"
                  alt="Jiranat Pattanasintara"
                  className=" w-6 h-6"
                />
              </Link>

              <Link href="https://github.com/51N74" target="_blank">
                <img
                  src="/icon_social/instagram.svg"
                  alt="Jiranat Pattanasintara"
                  className="w-6 h-6"
                />
              </Link>

              <Link href="https://github.com/51N74" target="_blank">
                <img
                  src="/icon_social/linkedin-white.svg"
                  alt="Jiranat Pattanasintara"
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
