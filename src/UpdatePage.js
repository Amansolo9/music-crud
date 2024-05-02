import React from 'react';
import { useLocation } from 'react-router-dom';

const UpdatePage = () => {
  const location = useLocation();
  const { song } = location.state || {}; 

  return (
    <div>
      <h1>Update Song</h1>
      {/* Display and edit the song's details */}
      <p>Song: {song?.song}</p>
      <p>Artist: {song?.artist}</p>
      {/* Add your form and logic for updating the song */}
    </div>
  );
};

export default UpdatePage;