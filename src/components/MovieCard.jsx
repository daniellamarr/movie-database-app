import React, { Component } from 'react';
import Text from './Text';
import Rating from './Rating';

export default class MovieCard extends Component {
  render() {
    const {movie} = this.props;
    const rating = Math.floor((movie.vote_average / 10) * 5);
    return (
      <div className="movie-card" style={{backgroundImage: `url(${movie.poster_path})`}}>
        <div className="movie-card-title">
          <Text fontSize={10} color="#fff">{movie.genres[0].name}</Text>
          <Text fontSize={16} color="#fff">{movie.title}</Text>
          <Rating noOfStars={rating} checkType="checked" />
        </div>
      </div>
    )
  }
}
