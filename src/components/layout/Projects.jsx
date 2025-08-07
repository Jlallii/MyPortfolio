// src/components/layout/Projects.jsx
import './Projects.css';
import { Link } from 'react-router-dom';
import fitLog from '../../assets/fitLog.png';
import finderLog from '../../assets/finderLog.png';


const projects = [
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker App',
    image: fitLog,
    description: 'Track workouts, calories, and fitness goals with ease.',
  },
  {
    id: 'device-finder',
    title: 'Device Finder App',
    image: finderLog,
    description: 'Search for companys devices, locate them, and manage favorites.',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Mobile Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={`/projects/${project.id}`} className="project-link">
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
