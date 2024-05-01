import './App.css';
import React from 'react';

function App() {
  // Static list of songs for the UI
  const songs = [
    { id: 1, title: 'Song Title 1', artist: 'Artist Name 1', year: 2001 },
    { id: 2, title: 'Song Title 2', artist: 'Artist Name 2', year: 2002 },
    // Add more static song data here
  ];

  return (
    <div>
      <h1>Song Management App</h1>
      <div>
        <h2>Add New Song</h2>
        {/* Add Song Form - Static UI */}
        <form>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Artist" />
          <input type="number" placeholder="Year" />
          <button type="submit">Add Song</button>
        </form>
      </div>
      <div>
        <h2>Songs List</h2>
        {/* Songs List */}
        {songs.map((song) => (
          <div key={song.id}>
            <p>Title: {song.title}</p>
            <p>Artist: {song.artist}</p>
            <p>Year: {song.year}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
