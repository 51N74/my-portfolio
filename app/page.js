import Image from "next/image";
import Experience from "./components/Experience";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";
export default function Home() {
  const workexperiences = [
    {
      company: "Sunnysideup Studio",
      position: "WordPress Developer",
      date: "2023 - Present",
      description:
        "As a Web Developer at an agency, my primary role is to create and customize websites tailored to client needs. Most projects involve leveraging the WordPress CMS, where I focus on designing and customizing themes using CSS and occasionally modifying plugins to align with specific requirements. My work emphasizes delivering user-friendly, visually appealing, and functional websites that meet diverse client expectations.",
    },
    {
      company: "alongdrip coffee",
      position: "Owner",
      date: "2021 - 2023",
      description:
        "During the COVID-19 pandemic, I established a small specialty coffee shop called `Alongdrip Coffee` in Khao Yai, focusing on a slow bar experience. Although it was a small operation, it provided invaluable lessons in business management, from overseeing daily operations and cost control to creating a welcoming customer experience. Additionally, I took the initiative to learn and perform coffee roasting myself, adding a personal touch to the business and deepening my understanding of the craft.",
    },
    {
      company: "Never Sleep Co.,Ltd.",
      position: "UX/UI Designer",
      date: "2020 - 2021",
      description:
        "As a UX/UI Designer, I focused on creating website designs based on client requirements, utilizing Figma to craft intuitive and visually appealing interfaces. While my role did not involve coding, I ensured that the designs aligned with user needs and project goals. I worked in this role for approximately three months before relocating back to my hometown",
    },
    {
      company: "Husband and Wife Shop",
      position: "Film Developer & Sales Associate",
      date: "2018 - 2020",
      description:
        "At a specialty film camera shop, I worked as a Film Developer and Sales Associate. My responsibilities included assisting customers with product recommendations, offering advice on film and camera selections, and developing and scanning film rolls brought in by customers. This role allowed me to enhance my skills in time management, prioritizing tasks, and providing excellent customer service within a niche market.",
    },
  ];

  const projects = [
    {
      name: "Panstr",
      
      description:
        "Panstr is a web-based forum inspired by Thailand's popular platform, Pantip. It allows users to discuss various topics in a user-friendly interface. Built with Next.js and PostgreSQL, this project aims to eventually integrate the Nostr Protocol, creating a truly decentralized forum experience.",
      link: "",
    },
    {
      name: "The Rice PanJa",
      description:
        "The Rice PanJa POS system is a web-based platform tailored for The Rice PanJa Restaurant. This system is designed to streamline restaurant operations while accommodating the unique requirements of a restaurant with guest rooms.",
      link: "",
    },
    {
      name: "E-commerce Showcase",
      description:
        "This project is a Coffee Beans Gallery web application designed to showcase various coffee bean products. The application features a user-friendly interface with a modern design, allowing users to browse through a selection of coffee beans, view details, and interact with a smooth carousel slider.",
      link: "",
    },
    {
      name: "FilmGallery",
      description:
        "FilmGallery is a web platform designed to showcase stunning photographs, primarily captured using film cameras. Users can explore and search for images based on the type of film, such as Kodak 200, to view photographs with a specific film aesthetic.",
      link: "",
    },

  ];

  return (
    <>
      <section
        id="about"
        className="ml-48 min-h-screen flex flex-col justify-center"
      >
        <AboutMe />
        
      </section>

      <section
        id="experience"
        className="ml-48 min-h-screen flex flex-col justify-center mb-16"
      >
        <Experience workexperiences={workexperiences} />
       <div className="mt-8 text-xl font-bold">
       View Resume
       </div>
      </section>

      <section
        id="projects"
        className="ml-48 min-h-screen flex flex-col justify-center"
      >
        <Project projects={projects} />
      </section>
    </>
  );
}
