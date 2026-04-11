"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home", external: false },
  { href: "/about", label: "about", external: false },
  { href: "https://tyl.sh", label: "blog", external: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="inner">
        <Link href="/" className="logo">
          {">"}tylercyert.com_
        </Link>
        <nav>
          {links.map(({ href, label, external }) =>
            external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={
                  pathname === href ||
                  (href !== "/" && pathname.startsWith(href))
                    ? "active"
                    : undefined
                }
              >
                {label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
