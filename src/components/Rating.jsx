/* eslint-disable for-direction */
/* eslint-disable no-plusplus */
import React, { Component } from 'react';

export default class Rating extends Component {
  loopStars() {
    const stars = [];
    const { noOfStars } = this.props;
    for (let i = 0; i < noOfStars; i++) {
      const star = i + 1;
      stars.push(star);
    }
    return stars;
  }

  createRating(id) {
    const star = document.getElementById(`star${id}`);
    if (star.classList.contains('unchecked')) {
      for (let i = id; i > 0; i--) {
        const otherStars = document.getElementById(`star${i}`);
        otherStars.classList.remove('unchecked');
      }
    } else {
      const { noOfStars } = this.props;
      for (let i = id + 1; i <= noOfStars; i++) {
        const otherStars = document.getElementById(`star${i}`);
        otherStars.classList.add('unchecked');
      }
    }
  }

  render() {
    return (
      <div>
        {
          this.loopStars().map(star => (
            <span
              key={star}
              id={`star${star}`}
              starvalue={star}
              className={`ti ti-star star ${this.props.checkType}`}
              onClick={() => this.createRating(star)}
            />
          ))
        }
      </div>
    );
  }
}

Rating.defaultProps = {
  noOfStars: 5,
  checkType: 'unchecked'
}
