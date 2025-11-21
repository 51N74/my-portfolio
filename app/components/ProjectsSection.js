import ProjectCard from './ProjectCard';
import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      name: "Panstr - Decentralized Forum",
      image: "/projects/panstr.png",
      description: "A web-based forum inspired by Thailand's popular platform, Pantip. Built with Next.js and PostgreSQL, with plans to integrate the Nostr Protocol for a truly decentralized forum experience.",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Nostr Protocol"],
      link: "https://panstr.vercel.app/",
      github: "https://github.com/51N74"
    },
    {
      name: "The Rice PanJa POS System",
      image: "/projects/the-rice-panja.png",
      description: "A comprehensive web-based POS system designed for The Rice PanJa Restaurant, featuring inventory management, order processing, and guest room accommodation integration.",
      tech: ["Next.js", "React", "Node.js", "MongoDB"],
      link: "https://the-rice-panja-pos.vercel.app/",
      github: "https://github.com/51N74"
    },
    {
      name: "Sintara Coffee Gallery",
      image: "/projects/sintara.png",
      description: "A modern e-commerce showcase web application for coffee beans gallery. Features smooth carousel interactions, product browsing, and a contemporary design focused on user experience.",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      link: "https://sintaracoffee.vercel.app/",
      github: "https://github.com/51N74"
    },
    {
      name: "FilmGallery - Photography Platform",
      image: "/projects/filmgallery.png",
      description: "A specialized web platform for showcasing film photography. Users can explore photographs by film type (Kodak 200, etc.) and discover unique film aesthetics with advanced search capabilities.",
      tech: ["Next.js", "Image Search", "Filter System", "Gallery Component"],
      link: "https://esyen-film-gallery.vercel.app/",
      github: "https://github.com/51N74"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent web development projects that showcase my technical skills
            and problem-solving abilities across different technologies and industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to see more projects or discuss how I can help with your specific needs?
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}