"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1100px)");
    const onResize = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <nav className="shell navigation" aria-label="Main navigation">
        <div className="navigation-bar">
          <Link
            href="/"
            className="brand"
            aria-label="Jiranat Pattanasintara, home"
          >
            <span className="brand-mark" aria-hidden="true">
              jp
            </span>
            <span>Jiranat Pattanasintara</span>
          </Link>
          <div className="desktop-navigation">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a
            className="button button-small header-resume"
            href="/Jiranat_Pattanasintara_Full_Stack_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path
                d={
                  mobileMenuOpen
                    ? "m6 6 12 12M6 18 18 6"
                    : "M4 7h16M4 12h16M4 17h16"
                }
              />
            </svg>
          </button>
        </div>
        <div
          id="mobile-navigation"
          className="mobile-navigation"
          hidden={!mobileMenuOpen}
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Jiranat_Pattanasintara_Full_Stack_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            View resume (PDF)
          </a>
        </div>
      </nav>
    </header>
  );
}
