import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';  // Updated import from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'; // Import styles for the lightbox
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import CollectionHeader from '../components/collectionHeader/CollectionHeader';
const Collection = () => {
  const images = [
    'https://link-to-image1.jpg',
    'https://link-to-image2.jpg',
    'https://link-to-image3.jpg',
    'https://link-to-image4.jpg',
    'https://link-to-image5.jpg',
    'https://link-to-image6.jpg',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    
    <div className="container">
    
<CollectionHeader/>
 <br/>
      {/* <h1 className="text-center my-4">My Collection</h1> */}
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={image}
                alt={`Photo ${index + 1}`}
                className="card-img-top"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Photo {index + 1}</h5>
                <p className="card-text">Model</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Collection;
