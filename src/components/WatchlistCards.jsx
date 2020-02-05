import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Text from './Text';
import Rating from './Rating';
import dummyImage from '../assets/images/primary-bg.jpg'

export default class WatchlistCard extends Component {
  render() {
    return (
      <div className="movie-card w-100" style={{backgroundImage: `url(${dummyImage})`, height:"48vmin"}}>
        <div className="movie-card-title">
          <Text fontSize={10} color="#fff">Action</Text>
            <Text fontSize={16} color="#fff">Snake in the plane</Text>
          <Rating noOfStars={4} checkType="checked" />
        </div>
      </div>
    )
  }
}
