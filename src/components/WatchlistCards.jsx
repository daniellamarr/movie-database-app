import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Text from './Text';
import Rating from './Rating';
import dummyImage from '../assets/images/primary-bg.jpg'

export default class WatchlistCard extends Component {
  render() {
    // const {movie} = this.props;
    // const rating = Math.floor((movie.vote_average / 10) * 5);
    return (
    //   <div className="movie-card" style={{backgroundImage: `url(${movie.poster_path})`}}>
      <div className="movie-card w-100" style={{backgroundImage: `url(${dummyImage})`, height:"48vmin"}}>
        <div className="movie-card-title">
          {/* <Text fontSize={10} color="#fff">{movie.genres.length > 0 && movie.genres[0].name}</Text> */}
          <Text fontSize={10} color="#fff">Action</Text>
          {/* <Link to={`/movies/${movie.id}`}>
            <Text fontSize={16} color="#fff">Snake in the plane</Text>
          </Link> */}
            <Text fontSize={16} color="#fff">Snake in the plane</Text>
          <Rating noOfStars={4} checkType="checked" />
        </div>
      </div>
    )
  }
}
