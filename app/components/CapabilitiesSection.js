export default function CapabilitiesSection() {
  const capabilities = [
    {
      title: "Full-Stack Development",
      description: "Building web applications across frontend, backend APIs, data handling, and deployment."
    },
    {
      title: "Frontend Engineering",
      description: "React, Next.js, JavaScript, responsive interfaces, component architecture, and API integration."
    },
    {
      title: "Backend & APIs",
      description: "Node.js, REST APIs, server-side logic, database integration, and external service integration."
    },
    {
      title: "Data & Systems",
      description: "Data pipelines, probability models, filtering systems, scheduled processing, validation, and data-driven applications."
    },
    {
      title: "Product Thinking",
      description: "Translating real-world problems into software workflows, interfaces, and practical product concepts."
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What I Build
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My engineering capabilities span across the entire stack, focusing on building robust, scalable, and user-centric applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
              <p className="text-gray-600 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
