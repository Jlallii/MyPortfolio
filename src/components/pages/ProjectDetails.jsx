// src/components/pages/ProjectDetails.jsx
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
// Finder Pics
import finderLog from '../../assets/finderLog.png';
import finderFavorites from '../../assets/finderF.png';
import finderLocation from '../../assets/finderL.png';
import finderSearch from '../../assets/finderSearch.png';
// Fit Pics
import fitLog from '../../assets/fitLog.png';
import fitNutrition from '../../assets/fitNutr.png';
import fitProfile from '../../assets/fitProf.png';
import fitSettings from '../../assets/fitSettings.png';


const projectData = {
  'fitness-tracker': {
    title: 'Fitness Tracker App',
    images: [fitLog, fitNutrition, fitProfile, fitSettings],
    description: 'This is a fitness tracking app with features for tracking workouts, calories and proteins, progress, and goals. Built with React Native and Firebase.',
    link: 'https://urn.fi/URN:NBN:fi:amk-202503134174',
    details: 'This was my final school work. It is posted on theseus and got a grading of 4/5'
  },
  'device-finder': {
    title: 'Device Finder App',
    images: [finderLog, finderFavorites, finderLocation, finderSearch],
    description: 'Search for company devices, manage favorites, locate devices and their last positions. Built with Kotlin.',
    details: 'This was done when I was interning at a company. It is used inside the company. All rights reserved by Haltian Oy.',
  }
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="container"><p>Project not found.</p></div>;

  return (
    <div className="project-details container">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="project-gallery">
        {project.images.map((img, index) => (
          <img src={img} alt={`${project.title} screenshot ${index + 1}`} key={index} />
        ))}
      </div>
      <p>{project.details}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
         Click for More Details on Theseus
        </a>
      )}
    </div>
  );
}
