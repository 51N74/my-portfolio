import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const selectedProjects = [
    {
      name: "Panstr",
      image: "/projects/panstr.png",
      description: "Panstr is a forum-style social platform inspired by traditional discussion boards, but built around the Nostr protocol instead of a conventional centralized backend. Panstr does not use its own database. Instead, the application connects directly to external Nostr relays and uses the Nostr protocol as its data layer.",
      tech: ["Next.js", "Nostr Protocol", "Tailwind CSS", "Vercel"],
      link: "https://panstr.vercel.app/",
      github: "https://github.com/51N74/panstr-webboard-forum"
    },
    {
      name: "The Rice PanJa POS",
      image: "/projects/the-rice-panja.png",
      description: "A web-based point-of-sale system built for a resort restaurant. The existing system was slow and information did not synchronize effectively between front-of-house ordering and the kitchen. The system was completed and deployed, but the restaurant subsequently closed before the application could be adopted in production.",
      tech: ["Next.js", "React", "Node.js", "Full-Stack Architecture"],
      link: "https://the-rice-panja-pos.vercel.app/",
      github: "https://github.com/51N74/POS-The-Rice-Panja"
    },
    {
      name: "HomeKitchen",
      description: "HomeKitchen is a frontend product prototype designed around the operational constraints of small home kitchens. Conventional food-delivery platforms often assume that kitchens can continue accepting orders. HomeKitchen explores a workflow where kitchen capacity is treated as a first-class constraint.",
      tech: ["React", "Frontend Prototype", "Product Concept"],
      github: "https://github.com/51N74/homekitchen-app"
    }
  ];

  const otherProjects = [
    {
      name: "Sintara Coffee Gallery",
      description: "A modern showcase web application for coffee beans gallery.",
      tech: ["React", "CSS3", "JavaScript"],
      link: "https://sintaracoffee.vercel.app/"
    },
    {
      name: "FilmGallery",
      description: "A specialized web platform for showcasing film photography.",
      tech: ["Next.js", "Gallery Component"],
      link: "https://esyen-film-gallery.vercel.app/"
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:underline">GitHub</a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}