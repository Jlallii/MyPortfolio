import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import Widgets from './components/layout/Widgets';
import Contact from './components/layout/Contact';
import Projects from './components/layout/Projects';
import ProjectDetails from './components/pages/ProjectDetails'; 


function App() {
  const location = useLocation();

// Scroll after navigating back to '/' with scrollTo state
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          // Adjust offset here to match your navbar height
          const y = el.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);


useEffect(() => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // 💡 Force layout reflow to fix lazy-rendered sections
  document.body.style.transform = 'scale(1)';
  requestAnimationFrame(() => {
    document.body.style.transform = '';
  });
}, []);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero id="hero" />
            <About id="about" />
            <Projects id="projects" />
            <Widgets id="widgets" />
            <Contact id="contact" />
          </>
        } />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
