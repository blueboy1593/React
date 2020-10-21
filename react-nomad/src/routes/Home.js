import React, { Component } from 'react';
import './Home.css';
import Movie from '../components/Movie';


class Home extends Component {
  // state는 초기 상태만 정의해주면 된다.
  state = {}
  
  // render 함수 다음에 실행되는 것 무조건!!
  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default Home;
