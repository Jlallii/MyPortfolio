// src/components/layout/Navbar.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function scrollToWithOffset(id, offset = 80) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      // Already on homepage, just scroll
      scrollToWithOffset(sectionId);
    } else {
      // Navigate to homepage and scroll after
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="logo">My Portfolio</div>

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#widgets" onClick={() => setMenuOpen(false)}>Widgets</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}