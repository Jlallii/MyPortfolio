import './Hero.css';
import profilePic from '../../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <img src={profilePic} alt="Janne Lalli" className="hero-img" />
        <div className="hero-text">
          <h1>Janne Lalli</h1>
          <h3>IT Engineer</h3>
          <a href="#projects">Check my work</a> 
        </div>
      </div>
    </section>
  );
}