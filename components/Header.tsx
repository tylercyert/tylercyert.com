import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Tyler Cyert, home">
          <span className="brand-mark" aria-hidden="true">tc</span>
          <span className="brand-name">Tyler Cyert<span>software &amp; systems</span></span>
        </Link>
        <nav className="primary-nav" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/about">About</Link>
        </nav>
        <a className="header-contact" href="mailto:tyler@tylercyert.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
