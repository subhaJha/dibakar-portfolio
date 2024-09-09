import React from 'react';
import './Sidebar.css';
import ProfileImage from './ProfileImage';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ProfileImage/>
      <h2>Dibakar Bhowmik</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>Collection</li>
          <li>About Me</li>
          <li>My Services</li>
          <li>Blog</li>
          <li>Newsletter</li>
        </ul>
      </nav>
      <input type="email" placeholder="Enter Email Address" />
      <button type="submit">Submit</button>
    </div>
  );
};

export default Sidebar;
