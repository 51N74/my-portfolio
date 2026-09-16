import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const selectedProjects = [
    {
      name: "Web Event Log Hub MVP",
      role: "Full-Stack Engineering",
      description: "Demonstrates full-stack application development, including frontend, backend API, authentication, and data handling. Showcases production-oriented engineering prioritizing robust architecture.",
      tech: ["Full-Stack Engineering", "Frontend", "Backend API", "Authentication"],
      github: "https://github.com/51N74/web-event-log-hub-mvp"
    },
    {
      name: "Panstr Webboard",
      role: "Architecture / Decentralized Systems",
      image: "/projects/panstr.png",
      description: "An unconventional architecture built around decentralized infrastructure. Features Nostr authentication and external Nostr relays as a data layer for forum functionality with robust client-side filtering.",
      tech: ["Architecture", "Nostr Protocol", "Next.js", "Decentralized Systems"],
      link: "https://panstr.vercel.app/",
      github: "https://github.com/51N74/panstr-webboard-forum"
    },
    {
      name: "HomeKitchen",
      role: "Product Thinking / Frontend",
      description: "Combines product-oriented implementation with frontend engineering. Structured using React 19, TypeScript, Vite, and TanStack Router, incorporating Tailwind CSS and external API integrations.",
      tech: ["Product Thinking", "React 19", "TypeScript", "Vite", "Tailwind CSS"],
      link: "https://homekitchen-app.vercel.app/",
      github: "https://github.com/51N74/homekitchen-app"
    }
  ];

  const otherProjects = [
    {
      name: "Rust Mole",
      description: "A macOS system utility built in Rust. Demonstrates systems-level thinking with careful handling of filesystem operations, APFS snapshots, safety checks, symlink protection, and audit logging via a CLI interface.",
      tech: ["Rust", "Systems", "CLI"],
      github: "https://github.com/51N74/rust-mole"
    },
    {
      name: "Room Booking API Minimal",
      description: "A backend service demonstrating architectural discipline. Developed with Rust, Axum, Diesel, and SQLite. Implements layered Clean Architecture concepts, JWT authentication, RBAC, and core booking logic.",
      tech: ["Backend", "Rust", "Axum", "Clean Architecture", "API"],
      github: "https://github.com/51N74/room-booking-api-minimal"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container">
        
        {/* Featured Project: VextaCore */}
        <div className="mb-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Project
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Left Column: What I Built & Demo */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">VextaCore</h3>
                    <p className="text-lg text-blue-600 font-medium mt-1">Quantitative Football Analytics Platform</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">What I Built</h4>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      VextaCore is a quantitative football analytics and research platform. It combines statistical modelling and market data to help users identify where model estimates and market prices diverge. 
                    </p>
                    <p className="text-gray-600 text-xl leading-relaxed mt-3">
                      The platform includes research, simulation, and market-signal workflows, and runs as a production web application.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-800">
                      <strong>My Role:</strong> Application architecture · Frontend development · Backend & API integration · External data integration · Automated data processing · Quantitative modelling integration
                    </p>
                    <p className="text-sm text-gray-800 mt-2">
                      <strong>Status:</strong> Live production application
                    </p>
                  </div>
                  
                  <div>
                    <a href="https://vextacore.app/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                      Live Demo
                    </a>
                  </div>
                </div>
                
                {/* Right Column: Why It Matters & What I Engineered */}
                <div className="lg:border-l lg:border-gray-100 lg:pl-12 space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Why It Matters</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      VextaCore was built around a simple question: what happens when a mathematical model and the market disagree? The platform turns multiple sources of data into a streamlined workflow for researching those differences.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">What I Actually Engineered</h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      I independently designed the system, integrated multiple data sources, built the application, handled difficult data issues, and deployed it as a working product.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-600 text-lg"><strong>System Architecture:</strong> Engineered an API-driven frontend and backend architecture to serve complex analytical workflows.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-600 text-lg"><strong>Data Integration:</strong> Designed data pipelines that combine external statistics with market data.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-600 text-lg"><strong>Data Integrity:</strong> Built validation mechanisms to reduce issues caused by stale or inconsistent external data.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-600 text-lg"><strong>Quantitative Systems:</strong> Integrated statistical models and simulation features into a fast, responsive user interface.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-600 text-lg"><strong>Production Engineering:</strong> Handled scheduled processing, testing, and production deployment.</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Selected Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Selected Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{project.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline">Live Demo</a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:underline">GitHub</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}