import React, { Component } from 'react';
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

class App extends Component {
  // state는 초기 상태만 정의해주면 된다.
  state = {
    greeting: 'Kang Hyun'
  }
  
  // render 함수 다음에 실행되는 것 무조건!!
  componentDidMount(){
    setTimeout(() => {
      // setState를 통해서 바꾸는게 이상적이다.
      this.setState({
        greeting: 'HI!'
      })
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.greeting}</h1>
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
