import React from 'react';
import './MainContent.css';
import ProfileImage from './ProfileImage';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="image-slider">
        {/* You can implement a carousel here if needed */}
        <ProfileImage/>
      </div>
      <div className="text-content">
        <h1>Hello! I'm <span>Dibakar Bhowmik</span> <br /> A <span>Photographer</span>. I Capture Life</h1>
        <p>I am a Photographer from America far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <div className="social-icons">
          <i className="fa fa-twitter"></i>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
