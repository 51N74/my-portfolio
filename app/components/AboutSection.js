export default function AboutSection() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "PHP", "WordPress", "REST APIs", "MongoDB", "PostgreSQL"] },
    { category: "Tools & Others", items: ["Git", "Figma", "Responsive Design", "SEO", "Performance Optimization"] }
  ];

  const experiences = [
    {
      company: "Sunnysideup Studio",
      position: "WordPress Developer",
      period: "2023 - Present",
      achievements: [
        "Developed and customized 15+ client websites using WordPress CMS",
        "Improved website performance by 40% through code optimization",
        "Successfully delivered all projects on time with 100% client satisfaction"
      ]
    },
    {
      company: "Alongdrip Coffee",
      position: "Founder & Owner",
      period: "2021 - 2023",
      achievements: [
        "Built and managed a successful specialty coffee business from concept to launch",
        "Implemented efficient operations and cost control systems",
        "Developed strong customer service and business management skills"
      ]
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate web developer with a diverse background bringing technical expertise
            and business acumen to every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Journey</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a results-driven Web Developer with a degree in IT from KMUTT and 2-3 years of experience
                  in creating digital solutions that solve real business problems. My journey began in UX/UI design,
                  where I learned the importance of user-centered thinking before transitioning to development.
                </p>
                <p>
                  After successfully running my own specialty coffee business during the pandemic, I returned to
                  tech with enhanced business acumen and problem-solving skills. This unique combination of technical
                  expertise and entrepreneurial experience allows me to understand both the technical and business
                  aspects of web development projects.
                </p>
                <p>
                  Currently, I specialize in WordPress development at Sunnysideup Studio while expanding my skills
                  in modern web technologies like React and Next.js. I'm committed to continuous learning and staying
                  current with industry best practices to deliver cutting-edge solutions.
                </p>
              </div>
            </div>

            {/* Key Strengths */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Work With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Business problem-solving mindset</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Strong project management</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Attention to detail</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Continuous learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-blue-100 last:border-l-0">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900">{exp.position}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-medium">{exp.company}</span>
                        <span className="text-sm text-gray-500">{exp.period}</span>
                      </div>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div key={index} className="text-center">
                <h4 className="font-bold text-gray-900 mb-4">{category.category}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-full hover:border-blue-300 hover:text-blue-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}