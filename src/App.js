import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  // state는 초기 상태만 정의해주면 된다.
  state = {}
  
  // render 함수 다음에 실행되는 것 무조건!!
  componentDidMount(){
    fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
