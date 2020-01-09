import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a movie!</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="http://www.opinionnews.co.kr/news/photo/201912/26373_18857_5250.jpg" />
        )
    }
}

export default Movie