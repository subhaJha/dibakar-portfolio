import React from 'react';
import MainContent from '../components/MainContent';
import Collection from './Collection'
import HorizontalGallery from '../components/HorizontalGallery/HorizontalGallery';

const Home = () => {
  return(<div className="home-wrapper">
    <MainContent />
    {/* <Collection /> */}
    <HorizontalGallery/>
  </div>);
};

export default Home;
