export default function TechStack() {
    const skills = [
        "JavaScript (ES6+)",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Git & GitHub",
    ];

    return (
        <section className="py-20 bg-muted/50">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
                <h2 className="text-3xl font-bold mb-12 text-primary">Technical Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="flex items-center justify-center p-6 bg-background rounded-lg border border-border shadow-sm hover:border-accent/50 transition-colors duration-300"
                        >
                            <span className="font-medium text-foreground">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
