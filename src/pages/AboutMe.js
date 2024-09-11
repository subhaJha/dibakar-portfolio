import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-image">
        <img src="https://example.com/your-image.jpg" alt="Sam Smith" />
      </div>
      <div className="about-me-text">
        <h1>About me. Sam Smith</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>
        <h3>My Clients</h3>
        <p>Company INC, Management INC, Photo album INC, Magnum Express, Fashion Gala, Unnamed</p>

        <h3>Editorials</h3>
        <p>Vogue, Elle, Company INC, Management INC, Photo album INC, Fashion Week, Fashion Gala, Vanity Fair, Vogue IT</p>

        <button className="contact-button">Contact Me</button>
      </div>
    </div>
  );
};

export default AboutMe;
