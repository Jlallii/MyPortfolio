// src/components/layout/Navbar.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function scrollToWithOffset(id, offset = 80) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function Navbar() {
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
        <ul className="nav-links">
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