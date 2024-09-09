import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section recent-photos">
        <h3>Recent Photos</h3>
        <div className="photo-gallery">
          <img src="photo1.jpg" alt="Recent Photo 1" />
          <img src="photo2.jpg" alt="Recent Photo 2" />
          <img src="photo3.jpg" alt="Recent Photo 3" />
          <img src="photo4.jpg" alt="Recent Photo 4" />
        </div>
      </div>

      <div className="footer-section archives">
        <h3>Archives</h3>
        <ul>
          <li><a href="#">November 2018 (105)</a></li>
          <li><a href="#">October 2018 (212)</a></li>
          <li><a href="#">September 2018 (150)</a></li>
        </ul>
      </div>

      <div className="footer-section contact-info">
        <h3>Have a Question?</h3>
        <p>Railway collony, jhaljhalia, Malda, 732102</p>
        <p>+91 9775688767 </p>
      </div>
      <div> <p>&copy; 2024 Louie Smith. All rights reserved.</p></div>
    </footer>
  );
};

export default Footer;
