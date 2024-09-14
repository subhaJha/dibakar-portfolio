import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
import './App.css';
import AboutMyStory from './components/developer/AboutMyStory';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content-wrapper">
          <Sidebar />
          <div className="main-content">
            <Routes>  
              <Route path="/" element={<Home />} />
              <Route path="/dibakar-portfolio" element={<Home />} />
              <Route path="/dibakar-portfolio/collection" element={<Collection />} />
              <Route path="/dibakar-portfolio/about" element={<AboutMe />} />
              <Route path="/dibakar-portfolio/services" element={<Services />} />
              <Route path="/dibakar-portfolio/creater" element={<AboutMyStory />} />
              <Route path="/dibakar-portfolio/newsletter" element={<Newsletter />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
