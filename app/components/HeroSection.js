"use client";

export default function HeroSection() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building <span className="text-gradient">Digital Solutions</span> That Drive Results
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mobile-readable">
                Full-Stack Web Developer specializing in creating custom websites and web applications
                that solve real business problems. From WordPress development to modern React applications.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToContact}
                className="btn-primary text-lg px-8 py-4 touch-target"
              >
                Hire Me for Your Project
              </button>
              <button
                onClick={handleScrollToProjects}
                className="btn-secondary text-lg px-8 py-4 touch-target"
              >
                View My Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">2+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4 px-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-2xl sm:text-3xl font-bold">JP</span>
                  </div>
                  <div className="text-gray-700 font-semibold text-base sm:text-lg">Web Developer</div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Specializing in custom web solutions
                  </div>
                </div>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-cyan-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}