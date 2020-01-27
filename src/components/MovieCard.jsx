import React, { Component } from 'react';
import Text from './Text';
import Rating from './Rating';

export default class MovieCard extends Component {
  render() {
    const {movie} = this.props;
    return (
      <div className="movie-card" style={{backgroundImage: `url(${movie.photo})`}}>
        <div className="movie-card-title">
          <Text fontSize={10} color="#fff">{movie.genre}</Text>
          <Text fontSize={16} color="#fff">{movie.title}</Text>
          <Rating noOfStars={movie.rating} checkType="checked" />
        </div>
      </div>
    )
  }
}
