import Link from "next/link";
export default function Sidebar() {
  return (
    <nav className=" h-full bg-base-200 fixed top-0 left-0">
      <div className="flex flex-col justify-between h-full p-4">
        <div>
          {/* profile */}
          <div className="m-6 space-y-2 mb-16">
            <h1 className="text-3xl font-bold">Jiranat Pattanasintara</h1>
            <h4 className="text-xl font-bold">Web Developer</h4>
            <p className="text-l">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
          </div>

          {/* menu */}
          <div className="m-6 mb-16">
            <ul className="space-y-6 text-xs">
              <li className="flex items-center space-x-4 group">
                <span className="w-10 h-[1px] bg-gray-500 group-hover:bg-white group-hover:w-20 transition-all"></span>
                <a
                  href="#about"
                  className="group-hover:text-white transition-all group-hover:font-bold"
                >
                  ABOUT
                </a>
              </li>
              <li className="flex items-center space-x-4 group">
                <span className="w-10 h-[1px] bg-gray-500 group-hover:bg-white group-hover:w-20 transition-all"></span>
                <a
                  href="#experience"
                  className="group-hover:text-white transition-all group-hover:font-bold"
                >
                  EXPERIENCE
                </a>
              </li>
              <li className="flex items-center space-x-4 group">
                <span className="w-10 h-[1px] bg-gray-500 group-hover:bg-white group-hover:w-20 transition-all"></span>
                <a
                  href="#projects"
                  className="group-hover:text-white transition-all"
                >
                  PROJECTS
                </a>
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
