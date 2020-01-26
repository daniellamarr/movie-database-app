import React, { Component } from 'react';
import Header from '../components/Header';
import Text from '../components/Text';
import Rating from '../components/Rating';
import Tag from '../components/Tag';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="landing">
          <section id="primary-movie">
            <div className="primary-movie-details">
              <div className="movie-title">
                <Text color="#fff" fontSize={40}>
                  The Source
                </Text>
              </div>
              <div className="movie-reviews">
                <Rating checkType="checked" />
              </div>
              <div className="movie-credits">
                <Text color="#fff">
                  Directed by: Daniel Lamarr
                </Text>
                <Text color="#fff">
                  Written by: Daniel Lamarr
                </Text>
              </div>
              <div className="tags">
                <Tag>Comedy</Tag>
                <Tag>Drama</Tag>
              </div>
            </div>
          </section>
          <section id="latest-movies"></section>
        </main>
      </div>
    )
  }
}
