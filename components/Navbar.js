'use client';

import { useState } from "react";

export default function Navbar({ data }) {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  const navStyles = {
    navbar: {
      background: 'rgba(2, 2, 43, 0.96)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '1rem 0',
      fontFamily: "'Poppins', sans-serif",
      zIndex: 9999,
    },
    brand: {
      background: 'linear-gradient(90deg, #00f2fe, #4facfe)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '800',
      fontSize: '1.7rem',
      letterSpacing: '1px',
    },
    link: {
      color: '#bbb',
      margin: '0 1rem',
      position: 'relative',
      textDecoration: 'none',
      transition: 'color 0.3s ease, transform 0.3s ease',
    },
    activeLink: {
      color: '#4facfe',
      fontWeight: '600',
      borderBottom: '2px solid #4facfe',
      transform: 'scale(1.05)'
    },
    toggler: {
      borderColor: '#4facfe',
      outline: 'none'
    },
    togglerIcon: {
      filter: 'invert(1)'
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow" style={navStyles.navbar}>
      <div className="container">
        <a
          className="navbar-brand"
          onClick={() => handleScroll('home')}
          style={{ ...navStyles.brand, cursor: 'pointer' }}
        >
          {data.brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={navStyles.toggler}
        >
          <span className="navbar-toggler-icon" style={navStyles.togglerIcon} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {data.items.map((item) => (
              <a
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="nav-link fs-5"
                href={item.href}
                style={{
                  ...navStyles.link,
                  ...(activeSection === item.href && navStyles.activeLink)
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
