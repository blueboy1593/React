import React from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Warcraft",
  "Terminator: Darkfate",
]

const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Warcraft_Teaser_Poster.jpg/220px-Warcraft_Teaser_Poster.jpg",
  "https://1.bp.blogspot.com/-fUyTx_z_FeY/XWmCh_HxuMI/AAAAAAABeE4/0vXXQIheCeU7BL7hHAMHM-7jo4dC-CL-wCLcBGAs/s1600/Terminator-Dark-Fate-2019-Sarah-Connor-Linda-Hamilton-Mackenzie-Natalia-Reyes-600x300.jpg",
]

function App() {
  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/>
    </div>
  );
}

export default App;
