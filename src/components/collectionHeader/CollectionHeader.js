import React from 'react';
import './CollectionHeader.css';

const CollectionHeader = () => {
  return (
    <div>
      <header>
        <ul className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/collection">Collection</a></li>
        </ul>
        <h1>My Collection</h1>
      </header>
      <div className="main-content">
        {/* Your other content goes here */}
      </div>
    </div>
  );
};

export default CollectionHeader;
