import React, { Component } from 'react'

export default class Tag extends Component {
  render() {
    return (
      <div className="tag">
        {this.props.children}
      </div>
    )
  }
}
