import React, { Component } from 'react';
import Text from './Text';

export default class CastCard extends Component {
  render() {
    const {cast} = this.props;
    return (
      <div className="cast-card" style={{backgroundImage: `url(${cast.profile_path})`}}>
        <div className="cast-card-title">
          <Text fontSize={14} color="#fff">{cast.name}</Text>
          <Text fontSize={10} color="#fff">{cast.character}</Text>
        </div>
      </div>
    )
  }
}
