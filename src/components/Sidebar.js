import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import ProfileImage from './ProfileImage';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ProfileImage />
      <h2>Dibakar Bhowmik</h2>
      <nav>
        <ul>
          <li>
            <NavLink
              exact="true"
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              My Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <input type="email" placeholder="Enter Email Address" />
      <button type="submit">Submit</button>
    </div>
  );
};

export default Sidebar;
