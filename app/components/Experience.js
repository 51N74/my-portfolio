const experiences = [
  {
    role: "WordPress Developer",
    company: "Sunnysideup Studio",
    period: "2023–Present",
    description:
      "Implementing and maintaining WordPress websites, with a focus on responsive interfaces, content structures, and practical website delivery. Alongside client work, I develop independent projects using modern JavaScript frameworks and full-stack architectures.",
    achievements: [
      "Developed and customized 15+ client websites using WordPress CMS.",
      "Improved website performance by 40% through code optimization.",
      "Delivered all projects on time with 100% client satisfaction.",
    ],
    skills: [
      "WordPress",
      "PHP",
      "JavaScript",
      "Responsive Web Development",
      "Website Implementation",
      "Performance",
      "SEO",
    ],
  },
  {
    role: "Founder & Owner",
    company: "Alongdrip Coffee",
    period: "2021–2023",
    description:
      "Built and ran a specialty coffee business during the pandemic, from concept to launch. Managed daily operations, customer experience, and product decisions while working with operational constraints and limited resources.",
    achievements: [
      "Implemented operations and cost control systems.",
      "Developed customer service and business management skills through day-to-day ownership.",
    ],
    skills: [],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="shell experience-layout">
        <div className="experience-introduction">
          <p className="section-context">Experience</p>
          <h2 id="experience-title">
            Technical work.
            <br />
            {" "}Business perspective.
          </h2>
          <p>
            Professional web development and first-hand experience running a
            business inform how I approach software.
          </p>
        </div>
        <div className="experience-timeline">
          {experiences.map((experience) => (
            <article className="experience-entry" key={experience.company}>
              <p className="experience-period">{experience.period}</p>
              <h3>{experience.role}</h3>
              <p className="experience-company">{experience.company}</p>
              <p>{experience.description}</p>
              <ul className="achievement-list">
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              {experience.skills.length > 0 && (
                <ul
                  className="technology-list"
                  aria-label={`${experience.company} skills`}
                >
                  {experience.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
