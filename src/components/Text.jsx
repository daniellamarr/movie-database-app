import React, { Component } from 'react';

export default class Text extends Component {
  render() {
    return (
      <p
        style={{
          color: this.props.color,
          fontSize: this.props.fontSize,
          fontWeight: this.props.fontWeight}}>
        {this.props.children}
      </p>
    )
  }
}

Text.defaultProps = {
  color: '#000',
  fontSize: 12,
  fontWeight: 'normal'
}
