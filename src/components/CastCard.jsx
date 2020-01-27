import React, { Component } from 'react';
import Text from './Text';

export default class CastCard extends Component {
  render() {
    const {cast} = this.props;
    return (
      <div className="cast-card" style={{backgroundImage: `url(${cast.photo})`}}>
        <div className="cast-card-title">
          <Text fontSize={14} color="#fff">{cast.title}</Text>
          <Text fontSize={10} color="#fff">{cast.character}</Text>
        </div>
      </div>
    )
  }
}
