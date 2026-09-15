export default function ContactSection() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "jptns@proton.me",
      action: "mailto:jptns@proton.me"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/51N74",
      action: "https://github.com/51N74"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/jiranat-pattanasintara-4b94ab348",
      action: "https://www.linkedin.com/in/jiranat-pattanasintara-4b94ab348/"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Let's Build Something Useful
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm currently open to Full-Time Developer opportunities and selected freelance projects.
              If you're hiring, building a product, or have a technical problem you'd like to discuss, I'd be happy to hear from you.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : '_self'}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gray-50 text-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{method.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{method.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="mailto:jptns@proton.me"
              className="btn-primary"
            >
              Send Email
            </a>
            <a
              href="/resume/Jiranat-Pattansintara-Full-Stack-Developer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex justify-center items-center"
            >
              View Resume
            </a>
            <a
              href="/resume/Jiranat-Pattansintara-Full-Stack-Developer-Resume.pdf"
              download="Jiranat-Pattansintara-Full-Stack-Developer-Resume.pdf"
              className="btn-secondary inline-flex justify-center items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}