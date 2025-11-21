export default function CaseStudy({ project }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Project Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{project.title}</h1>
        <div className="flex flex-wrap justify-center gap-3">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>View Live Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      {/* Project Overview */}
      <div className="grid md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{project.duration}</div>
          <div className="text-sm text-gray-600">Duration</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{project.role}</div>
          <div className="text-sm text-gray-600">My Role</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{project.result}</div>
          <div className="text-sm text-gray-600">Key Result</div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="space-y-12">
        {/* The Problem */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {project.problem.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>

          {/* Challenges */}
          {project.challenges && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* My Role & Approach */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Role & Approach</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsibilities</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.responsibilities.map((resp, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.approach && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">My Approach</h3>
                <div className="prose prose-lg max-w-none text-gray-600">
                  {project.approach.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Technical Solution */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Solution</h2>
          <div className="space-y-6">
            {/* Architecture/Technical Decisions */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Technical Decisions</h3>
              <div className="space-y-4">
                {project.technicalDecisions.map((decision, index) => (
                  <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{decision.title}</h4>
                    <p className="text-gray-600 text-sm">{decision.explanation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Implementation */}
            {project.features && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features Implemented</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="card p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.name}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Results & Impact */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <div className="space-y-6">
            {/* Metrics */}
            {project.metrics && (
              <div className="grid md:grid-cols-3 gap-6">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                    <div className="text-gray-900 font-medium">{metric.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{metric.description}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Testimonials/Feedback */}
            {project.testimonial && (
              <div className="bg-white p-6 border-l-4 border-blue-600 rounded-r-lg">
                <blockquote className="text-gray-700 italic mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="text-sm text-gray-600">
                  <div className="font-medium text-gray-900">- {project.testimonial.author}</div>
                  <div>{project.testimonial.role}</div>
                </div>
              </div>
            )}

            {/* Key Outcomes */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Outcomes</h3>
              <div className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        {project.lessons && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              {project.lessons.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center pt-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in working together?</h3>
        <p className="text-gray-600 mb-6">
          I'm always excited to take on new challenges and help businesses solve their technical problems.
        </p>
        <a
          href="#contact"
          className="btn-primary"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}