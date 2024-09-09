import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer'
import './App.css'; 

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <Sidebar />
        <MainContent />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
