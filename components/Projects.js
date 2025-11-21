import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description:
                "A comprehensive dashboard for managing products, orders, and analytics. Built with performance and scalability in mind.",
            tech: ["Next.js", "TypeScript", "Prisma"],
            liveLink: "#",
            repoLink: "#",
        },
        {
            title: "Task Management App",
            description:
                "A collaborative task manager with real-time updates and team features. Focuses on intuitive UX and clean design.",
            tech: ["React", "Firebase", "Tailwind"],
            liveLink: "#",
            repoLink: "#",
        },
        {
            title: "Weather Forecast API",
            description:
                "A robust API service providing accurate weather data. Implements caching and rate limiting for optimal performance.",
            tech: ["Node.js", "Express", "Redis"],
            liveLink: "#",
            repoLink: "#",
        },
    ];

    return (
        <section id="projects" className="py-24 max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-bold mb-12 text-primary">Selected Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group flex flex-col bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                    >
                        <div className="h-48 bg-secondary/10 w-full relative overflow-hidden">
                            {/* Placeholder for project image */}
                            <div className="absolute inset-0 flex items-center justify-center text-secondary/30 text-sm font-medium">
                                Project Preview
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-secondary mb-6 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 text-xs font-medium bg-muted text-secondary rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-auto">
                                <Link
                                    href={project.liveLink}
                                    className="text-sm font-medium text-primary hover:text-accent transition-colors"
                                >
                                    Live Demo
                                </Link>
                                <Link
                                    href={project.repoLink}
                                    className="text-sm font-medium text-primary hover:text-accent transition-colors"
                                >
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
