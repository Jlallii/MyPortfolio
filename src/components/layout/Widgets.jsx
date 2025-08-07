import ChatWidget from '../sections/ChatWidget';
import TechStackGame from '../sections/TechStackGame';
import ThemeLab from '../sections/ThemeLab';
import './Widgets.css';

export default function Widgets() {
  return (
    <section id="widgets">
      <div className="container">
        <h2>Widgets</h2>
        <div className="widgets-grid">
          <div className="widget-card">
            <h3>Tech Stack Guessing Game</h3>
            <TechStackGame />
          </div>
          <div className="widget-card">
            <h3>Theme Customizer</h3>
            <ThemeLab />
          </div>
          <div className="widget-card">
            <h3>“Tech AI Advisor” Chat Widget</h3>
            <ChatWidget/>
          </div>
        </div>
      </div>
    </section>
  );
}