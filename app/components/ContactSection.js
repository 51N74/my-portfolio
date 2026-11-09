export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="section-context">Get in touch</p>
          <h2 id="contact-title">Let’s build something useful.</h2>
          <p>
            I’m open to full-time developer opportunities and selected freelance
            projects. If you’re hiring, building a product, or working through a
            technical problem, I’d be happy to hear from you.
          </p>
          <a className="button button-primary" href="mailto:jptns@proton.me">
            Send an email
          </a>
        </div>
        <div className="contact-links">
          <a href="mailto:jptns@proton.me">
            <span>Email</span>
            <strong>jptns@proton.me</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/51N74"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <strong>51N74</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jiranat-pattanasintara"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <strong>Jiranat Pattanasintara</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="/Jiranat_Pattanasintara_Full_Stack_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <strong>View resume (PDF)</strong>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
