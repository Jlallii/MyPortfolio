import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="container">
        <h2>Contact</h2>
        <p>Send me an email or connect on LinkedIn!</p>
        <div className="contact-form">
          <div>
            <label>LinkedIn: </label>
            <a href="https://www.linkedin.com/in/jannelalli/" target="_blank" rel="noopener noreferrer">
              https://www.linkedin.com/in/janne-lalli-03b91834b/
            </a>
          </div>
          <h4>Email: janne.lalli@hotmail.com</h4>
        </div>
    </section>
  );
}