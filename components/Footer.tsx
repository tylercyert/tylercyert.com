import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <span className="footer-mark" aria-hidden="true">tc</span>
          <p>Software for the systems people count on.</p>
          <small>© {new Date().getFullYear()} Tyler Cyert</small>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/#work">Selected work</Link>
          <Link href="/about">About</Link>
          <a href="https://tyl.sh" target="_blank" rel="noopener noreferrer">Writing ↗</a>
          <a href="https://github.com/tylercyert" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/tyler-cyert/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="mailto:tyler@tylercyert.com">Email ↗</a>
        </nav>
      </div>
    </footer>
  );
}
