import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Text from './Text';
import Rating from './Rating';
import dummyImage from '../assets/images/primary-bg.jpg'

export default class WatchlistCard extends Component {
  constructor(props){
    super(props)
    console.log("wewr", this.props.data.genres)
  }

  render() {
    return (
      <div className="movie-card w-100" style={{backgroundImage: `url(${this.props.data.backdrop_path})`, height:"48vmin"}}>
        <div className="movie-card-title">
  <Text fontSize={10} color="#fff">{this.props.data.genres.map(g=>{
    return g.name+" "
  })}</Text>
  <Text fontSize={16} color="#fff">{this.props.data.title}</Text>
          <Rating noOfStars={4} checkType="checked" />
        </div>
      </div>
    )
  }
}
