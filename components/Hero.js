import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-start max-w-5xl mx-auto px-6 sm:px-8">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-primary mb-6">
                Building digital <br />
                <span className="text-accent">experiences</span> that matter.
            </h1>
            <p className="text-xl sm:text-2xl text-secondary max-w-2xl mb-10 leading-relaxed">
                I'm a Web Developer specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="#contact"
                    className="px-8 py-4 bg-primary text-background text-lg font-medium rounded-full hover:bg-accent transition-colors duration-300 text-center"
                >
                    Hire Me
                </Link>
                <Link
                    href="#projects"
                    className="px-8 py-4 border border-secondary text-primary text-lg font-medium rounded-full hover:border-primary transition-colors duration-300 text-center"
                >
                    View Work
                </Link>
            </div>
        </section>
    );
}
