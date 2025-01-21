export default function Project({ projects }) {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center"
    >
      {projects.map((project, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-2xl font-bold">{project.name}</h3>
          <p className="mt-2">{project.description}</p>
        </div>
      ))}
    </section>
  );
}