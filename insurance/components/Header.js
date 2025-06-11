import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold text-primary">
          <i className="fas fa-shield-alt me-2"></i>InsureTrust
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          <div className="d-flex ms-lg-3">
            <button className="btn btn-outline-primary me-2">Login</button>
            <button className="btn btn-primary">Get Quote</button>
          </div>
        </div>
      </div>
    </nav>
  );
}