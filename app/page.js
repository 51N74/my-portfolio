import Image from "next/image";
import Experience from "./components/Experiemce";
import Project from "./components/Project";
export default function Home() {
  const workexperiences = [
    {
      company: "Klaviyo",
      position: "Senior Front-End Engineer",
      date: "2021 - Present",
      description:
        "Specializing in accessibility, I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.",
    },
    {
      company: "Klaviyo",
      position: "Front-End Engineer",
      date: "2019 - 2021",
      description:
        "Developed and maintained UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.",
    },
    {
      company: "Klaviyo",
      position: "Front-End Engineer",
      date: "2019 - 2021",
      description:
        "Developed and maintained UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.",
    },
  ];

  const projects = [
  {
    name: "Spotify API Course",
    description: "Released a comprehensive video course guiding learners through building a web app with the Spotify API.",
    link: ""
  },
  {
    name: "Spotify API Course",
    description: "Released a comprehensive video course guiding learners through building a web app with the Spotify API.",
    link: ""
  },
  {
    name: "Spotify API Course",
    description: "Released a comprehensive video course guiding learners through building a web app with the Spotify API.",
    link: ""
  },
  {
    name: "Spotify API Course",
    description: "Released a comprehensive video course guiding learners through building a web app with the Spotify API.",
    link: ""
  },
  {
    name: "Spotify API Course",
    description: "Released a comprehensive video course guiding learners through building a web app with the Spotify API.",
    link: ""
  },
  {
    name: "Spotify API Course",
    description: "Released a comprehensive video course guiding learners through building a web app with the Spotify API.",
    link: ""
  },
  {
    name: "Spotify API Course",
    description: "Released a comprehensive video course guiding learners through building a web app with the Spotify API.",
    link: ""
  },
  {
    name: "Spotify API Course",
    description: "Released a comprehensive video course guiding learners through building a web app with the Spotify API.",
    link: ""
  },
  {
    name: "Spotify API Course",
    description: "Released a comprehensive video course guiding learners through building a web app with the Spotify API.",
    link: ""}
]

  return (
    <>
      <section
        id="about"
        className="ml-48 min-h-screen flex flex-col justify-center"
      >
        <p className="mt-4">
          I’m a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My favorite work lies at the intersection of design and development,
          creating experiences that not only look great but are meticulously
          built for performance and usability.{" "}
        </p>
        <p className="mt-4">
          Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in
          accessibility. I contribute to the creation and maintenance of UI
          components that power Klaviyo’s frontend, ensuring our platform meets
          web accessibility standards and best practices to deliver an inclusive
          user experience.{" "}
        </p>
        <p className="mt-4">
          In the past, I've had the opportunity to develop software across a
          variety of settings — from advertising agencies and large corporations
          to start-ups and small digital product studios. Additionally, I also
          released a comprehensive video course a few years ago, guiding
          learners through building a web app with the Spotify API.{" "}
        </p>
        <p className="mt-4">
          In my spare time, I’m usually climbing, reading, hanging out with my
          wife and two cats, or running around Hyrule searching for Korok seeds
          K o r o k s e e d s .
        </p>
      </section>

      <section
        id="experience"
        className="ml-48 min-h-screen flex flex-col justify-center"
      >
        <Experience workexperiences={workexperiences}
        
        />
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
