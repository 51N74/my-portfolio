import Link from "next/link";
export default function Project({ projects }) {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center"
    >
      {projects.map((project, index) => (
        <Link href={project.link} passHref>
          <div
            key={index}
            className="flex flex-row mt-4 mb-16 p-4 cursor-pointer hover:bg-[#182848] transition"
          >
            <img src={project.image} alt={project.name} className="w-64 h-32" />
            <div className="ml-8">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
