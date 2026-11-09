export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-layout">
        <div>
          <p>© {new Date().getFullYear()} Jiranat Pattanasintara</p>
          <p className="footer-note">Built with Next.js & Tailwind CSS.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/51N74"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jiranat-pattanasintara"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
