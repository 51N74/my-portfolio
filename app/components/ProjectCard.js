import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="card overflow-hidden group hover:translate-y-[-4px] transition-all duration-300">
      {project.image ? (
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white">
              <p className="text-sm">View Live Project →</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-48 bg-gray-50 border-b border-gray-100 flex flex-col items-center justify-center p-6 text-center overflow-hidden group-hover:bg-gray-100 transition-colors duration-300">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          <div className="relative z-10 space-y-1">
            <h4 className="text-gray-800 font-bold text-xl">{project.name}</h4>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{project.role || "Project"}</p>
          </div>
        </div>
      )}

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Technical Stack */}
        {project.tech && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Project Links */}
        <div className="flex gap-4 pt-4 border-t border-gray-100">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              View Live Demo →
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-gray-700 transition-colors"
            >
              View Code →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}