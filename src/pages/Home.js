import React from 'react';
import MainContent from '../components/MainContent';
import Collection from './Collection'

const Home = () => {
  return(<div className="home-wrapper">
    <MainContent />
    <Collection />
  </div>);
};

export default Home;
