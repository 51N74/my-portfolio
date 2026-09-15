export default function Experience() {
  const experiences = [
    {
      role: "WordPress Developer",
      company: "Sunnysideup Studio",
      date: "2023–Present",
      description: (
        <>
          <p className="mb-4">
            Working on WordPress-based websites with a focus on implementation, responsive interfaces, content structures, and website maintenance.
          </p>
          <p>
            Alongside client work, I have expanded my engineering skills into modern JavaScript frameworks and full-stack application development through independent projects.
          </p>
        </>
      ),
      skills: ["WordPress", "PHP", "JavaScript", "Responsive Web Development", "Website Implementation", "Performance", "SEO"]
    },
    {
      role: "Founder & Owner",
      company: "Alongdrip Coffee",
      date: "2021–2023",
      description: (
        <>
          <p className="mb-4">
            Ran a specialty coffee business during the pandemic, handling day-to-day operations, customer experience, product decisions, and business operations.
          </p>
          <p>
            This experience gave me direct exposure to operational constraints, customer workflows, limited resources, and the gap between a product idea and real-world execution.
          </p>
        </>
      ),
      skills: []
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <div className="text-lg text-blue-600 font-medium mt-1">{exp.company}</div>
                </div>
                <div className="text-gray-500 font-medium mt-2 md:mt-0">
                  {exp.date}
                </div>
              </div>
              
              <div className="text-gray-600 leading-relaxed text-xl mb-6">
                {exp.description}
              </div>

              {exp.skills.length > 0 && (
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}