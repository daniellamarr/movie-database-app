import React, { Component } from 'react';
import Header from '../components/Header';
import Text from '../components/Text';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
import MovieCard from '../components/MovieCard';

const movies = [
  {
    title: 'Black Panther',
    genre: 'Action',
    photo: 'https://images.pexels.com/photos/2346001/pexels-photo-2346001.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rating: 5
  },
  {
    title: 'Black Panther',
    genre: 'Action',
    photo: 'https://images.pexels.com/photos/1091294/pexels-photo-1091294.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rating: 3
  },
  {
    title: 'Black Panther',
    genre: 'Action',
    photo: 'https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rating: 4
  },
  {
    title: 'Black Panther',
    genre: 'Action',
    photo: 'https://images.pexels.com/photos/3283126/pexels-photo-3283126.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rating: 2
  },
  {
    title: 'Black Panther',
    genre: 'Action',
    photo: 'https://images.pexels.com/photos/3009803/pexels-photo-3009803.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rating: 4
  },
  {
    title: 'Black Panther',
    genre: 'Action',
    photo: 'https://images.pexels.com/photos/3073902/pexels-photo-3073902.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rating: 1
  },
  {
    title: 'Black Panther',
    genre: 'Action',
    photo: 'https://images.pexels.com/photos/2225315/pexels-photo-2225315.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rating: 4
  },
  {
    title: 'Black Panther',
    genre: 'Action',
    photo: 'https://images.pexels.com/photos/2220314/pexels-photo-2220314.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rating: 2
  }
]

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
          <section id="latest-movies">
            <div className="latest-header">
              <div className="title">
                <Text color="#fff">Recently Added</Text>
              </div>
              <div className="sort"></div>
            </div>
            <div className="movies">
              {movies.map(movie => (
                <MovieCard movie={movie} />
              ))}
            </div>
          </section>
        </main>
      </div>
    )
  }
}
