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
      image: "/projects/homekitchen.png",
      description: "HomeKitchen is a frontend product prototype designed around the operational constraints of small home kitchens. Conventional food-delivery platforms often assume that kitchens can continue accepting orders. HomeKitchen explores a workflow where kitchen capacity is treated as a first-class constraint.",
      tech: ["React", "Frontend Prototype", "Product Concept"],
      link: "#",
      github: "https://github.com/51N74/homekitchen-app"
    }
  ];

  const otherProjects = [
    {
      name: "Sintara Coffee Gallery",
      description: "A modern showcase web application for coffee beans gallery.",
      tech: ["React", "CSS3", "JavaScript"],
      link: "https://sintaracoffee.vercel.app/",
      github: "https://github.com/51N74"
    },
    {
      name: "FilmGallery",
      description: "A specialized web platform for showcasing film photography.",
      tech: ["Next.js", "Gallery Component"],
      link: "https://esyen-film-gallery.vercel.app/",
      github: "https://github.com/51N74"
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
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">VextaCore</h3>
                    <p className="text-lg text-blue-600 font-medium mt-1">Quantitative Football Analytics Platform</p>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    VextaCore is a quantitative research platform for football that compares mathematical probability models with market odds to identify where the numbers disagree.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Project Details:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                      <li>Bivariate Poisson & Dixon-Coles probability modelling</li>
                      <li>Market odds and implied probability analysis</li>
                      <li>Expected Value (EV) / Edge calculation</li>
                      <li>Automated market signal scanning</li>
                      <li>Football statistics data pipeline</li>
                      <li>Match simulation and scenario analysis</li>
                      <li>Sensitivity analysis</li>
                      <li>API-driven application architecture</li>
                      <li>Data integrity and temporal validation</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-800">
                      <strong>My Role:</strong> Product planning · System architecture · Frontend · Backend integration · Data pipeline · Quantitative logic · Testing · Deployment
                    </p>
                    <p className="text-sm text-gray-800 mt-2">
                      <strong>Status:</strong> Live production application
                    </p>
                  </div>
                  
                  <div>
                    <a href="#vextacore-case-study" className="btn-primary inline-block">
                      View Case Study
                    </a>
                  </div>
                </div>
                
                {/* Technical Case Study Side */}
                <div id="vextacore-case-study" className="lg:border-l lg:border-gray-100 lg:pl-12 space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Technical Approach</h4>
                    <p className="text-gray-600 leading-relaxed">
                      VextaCore combines statistical modelling with market data. The probability engine uses Bivariate Poisson and Dixon-Coles methods to estimate match outcome probabilities.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-3">
                      Market odds are converted into implied probabilities and compared with model probabilities. The system uses the resulting divergence to calculate potential Expected Value and surface quantitative signals.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Engineering Challenges</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">Integrating external data sources and scheduled data updates reliably.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">Handling market odds and probability calculations accurately.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">Managing stale data and complex competition/team mappings.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">Differentiating between pre-match vs in-play data.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">Ensuring strict data validation and temporal integrity throughout the pipeline.</span>
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