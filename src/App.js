import React from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Warcraft",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Warcraft_Teaser_Poster.jpg/220px-Warcraft_Teaser_Poster.jpg",
  },
  {
    title: "Terminator: Darkfate",
    poster: "https://1.bp.blogspot.com/-fUyTx_z_FeY/XWmCh_HxuMI/AAAAAAABeE4/0vXXQIheCeU7BL7hHAMHM-7jo4dC-CL-wCLcBGAs/s1600/Terminator-Dark-Fate-2019-Sarah-Connor-Linda-Hamilton-Mackenzie-Natalia-Reyes-600x300.jpg",
  },
]

function App() {
  return (
    <div className="App">
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
      })}
    </div>
  );
}

export default App;
