import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SongsList from './SongList'; // Adjust the import path as necessary
import UpdateSong from './UpdatePage'; // Assuming you have this component
import { Global } from '@emotion/react'; // Assuming Global styles are from @emotion/react
import { GlobalStyles } from './styledComponents'; // Adjust the import path as necessary

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<SongsList />} />
        <Route path="/update" element={<UpdateSong />} />
      </Routes>
    </>
  );
}

export default App;
