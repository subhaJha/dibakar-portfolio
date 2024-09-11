import React from 'react';
import dibakarphoto from '../assets/dibakarphoto.jpg'
const ProfileImage = () => {
  return (
    <div className="profile-image">
      <img src={dibakarphoto} alt="Dibakar Bhowmik" />
    </div>
  );
};

export default ProfileImage;
