import React from 'react';
import './CollectionHeader.css'

const CollectionHeader = () => {
  return(<div >
      <header>
  <ul class="breadcrumb">
    <li><a href="/">Home</a></li>
    <li><a href="/collection">Collection</a></li>
  </ul>
  <h1>My Collection</h1>
</header>
  </div>);
};

export default CollectionHeader;
