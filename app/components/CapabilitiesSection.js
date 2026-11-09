const capabilities = [
  {
    title: "Build across the stack",
    description:
      "Frontend interfaces, backend APIs, data handling, and deployment brought together in working applications.",
    href: "#unpause",
    evidence: "Unpause: React, Go, and PostgreSQL",
  },
  {
    title: "Work with complex data",
    description:
      "External data integration, validation, probability models, filtering, and scheduled processing.",
    href: "#vextacore",
    evidence: "VextaCore: data into research workflows",
  },
  {
    title: "Choose the architecture",
    description:
      "Component architecture, API integration, and data-layer decisions shaped by the problem.",
    href: "#panstr",
    evidence: "Panstr: Nostr relays as the data layer",
  },
  {
    title: "Think through the product",
    description:
      "Translate real-world constraints into practical software workflows and responsive interfaces.",
    href: "#homekitchen",
    evidence: "HomeKitchen: capacity before orders",
  },
];

const skills = [
  {
    category: "Frontend",
    items: "React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS",
  },
  {
    category: "Backend & data",
    items: "Node.js, Go, Gin, REST APIs, PostgreSQL, MongoDB",
  },
  {
    category: "CMS & web delivery",
    items: "WordPress, PHP, responsive design, SEO, performance optimization",
  },
  {
    category: "Tools & deployment",
    items: "Git, Figma, Vercel, Docker, Render",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="section capabilities-section"
      aria-labelledby="capabilities-title"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="section-context">Technical capabilities</p>
            <h2 id="capabilities-title">Skills you can trace to the work.</h2>
          </div>
          <p>
            From responsive interfaces to backend business rules. Each
            capability has a project behind it.
          </p>
        </div>
        <div className="capabilities-layout">
          <div className="capability-evidence-list">
            {capabilities.map((capability) => (
              <article className="capability-evidence" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <a href={capability.href} className="text-link">
                  {capability.evidence} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
          <aside className="skills-inventory" aria-labelledby="skills-title">
            <h3 id="skills-title">My toolkit</h3>
            <dl>
              {skills.map((skill) => (
                <div key={skill.category}>
                  <dt>{skill.category}</dt>
                  <dd>{skill.items}</dd>
                </div>
              ))}
            </dl>
            <p className="skills-note">
              Professional WordPress development at Sunnysideup Studio,
              alongside independent full-stack projects.
            </p>
            <a href="#experience" className="text-link">
              View my experience <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
