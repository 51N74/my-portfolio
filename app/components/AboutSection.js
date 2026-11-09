export default function AboutSection() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="shell about-layout">
        <div>
          <p className="section-context">About me</p>
          <h2 id="about-title">Understanding the problem comes first.</h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            My path to development brings together technology, design, and the
            realities of running a business.
          </p>
          <p>
            I have a degree in IT from KMUTT. My journey began in UX/UI design,
            where I learned to think from the user’s perspective before
            transitioning into development.
          </p>
          <p>
            Running Alongdrip Coffee gave me a direct understanding of customer
            workflows, operational constraints, and the gap between an idea and
            its execution. I bring that perspective to the software I build.
          </p>
          <p>
            Today, I specialize in WordPress development at Sunnysideup Studio
            while building my capabilities in React, Next.js, and full-stack
            applications through independent projects.
          </p>
          <ul className="strengths-list" aria-label="Working strengths">
            <li>Business problem-solving mindset</li>
            <li>Strong project management</li>
            <li>Attention to detail</li>
            <li>Continuous learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
