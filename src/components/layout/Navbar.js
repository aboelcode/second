import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="navbar-brand">AboelCode</Link>
            <ul className="nav-links">
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                  نحن
                </Link>
              </li>
              <li>
                <Link to="/downloads" className={location.pathname === '/downloads' ? 'active' : ''}>
                  التحميلات
                </Link>
              </li>
              <li>
                <Link to="/donations" className={location.pathname === '/donations' ? 'active' : ''}>
                  التبرعات
                </Link>
              </li>
              <li>
                <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/rating" className={location.pathname === '/rating' ? 'active' : ''}>
                  التقييم
                </Link>
              </li>
              <li>
                <Link to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''}>
                  التحليلات
                </Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                  تواصل معنا
                </Link>
              </li>
            </ul>
            <div className="mobile-menu" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="close-menu" onClick={closeMobileMenu}>
          <i className="fas fa-times"></i>
        </div>
        <ul>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              الرئيسية
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              نحن
            </Link>
          </li>
          <li>
            <Link to="/downloads" onClick={closeMobileMenu}>
              التحميلات
            </Link>
          </li>
          <li>
            <Link to="/donations" onClick={closeMobileMenu}>
              التبرعات
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMobileMenu}>
              المدونة
            </Link>
          </li>
          <li>
            <Link to="/rating" onClick={closeMobileMenu}>
              التقييم
            </Link>
          </li>
          <li>
            <Link to="/analytics" onClick={closeMobileMenu}>
              التحليلات
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMobileMenu}>
              تواصل معنا
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Overlay for Mobile Menu */}
      <div 
        className={`overlay ${isMobileMenuOpen ? 'open' : ''}`} 
        onClick={closeMobileMenu}
      ></div>
    </>
  );
};

export default Navbar;