"use client";

export default function HeroSection() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Full-Stack Developer Building Real-World Web Applications
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mobile-readable">
                I build and ship web applications across the stack — from frontend interfaces and APIs to data-driven systems, decentralized applications, and production deployments.
              </p>
              <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0">
                Currently focused on Next.js, React, Node.js, APIs, data-driven systems, and modern web application architecture.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToProjects}
                className="btn-primary text-lg px-8 py-4 touch-target"
              >
                View My Projects
              </button>
              <a
                href="/resume/Jiranat-Pattansintara-Full-Stack-Developer-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4 touch-target inline-flex justify-center items-center"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="w-full max-w-md p-8 bg-gray-50 rounded-xl border border-gray-200 font-mono text-sm sm:text-base text-gray-700 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-2">
                <p><span className="text-blue-600">const</span> developer = {'{'}</p>
                <p className="pl-4">name: <span className="text-green-600">'Jiranat Pattanasintara'</span>,</p>
                <p className="pl-4">role: <span className="text-green-600">'Full-Stack Developer'</span>,</p>
                <p className="pl-4">location: <span className="text-green-600">'Thailand'</span>,</p>
                <p className="pl-4">skills: [<span className="text-green-600">'Next.js'</span>, <span className="text-green-600">'React'</span>, <span className="text-green-600">'Node.js'</span>]</p>
                <p>{'};'}</p>
                <br />
                <p><span className="text-blue-600">developer</span>.build(<span className="text-green-600">'scalable applications'</span>);</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}