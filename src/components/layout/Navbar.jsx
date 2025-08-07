// src/components/layout/Navbar.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

    // Scroll with offset helper (adjust offset as needed)
  function scrollToWithOffset(id, offset = 60) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname === '/') {
      scrollToWithOffset(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="logo">My Portfolio</div>

        <div className="menu-icon" onClick={() => setMenuOpen(prev => !prev)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => handleNavClick('hero')}>Home</button></li>
          <li><button onClick={() => handleNavClick('about')}>About</button></li>
          <li><button onClick={() => handleNavClick('projects')}>Projects</button></li>
          <li><button onClick={() => handleNavClick('widgets')}>Widgets</button></li>
          <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}