import React, { Component } from 'react';
import Header from '../components/Header';
import Text from '../components/Text';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
import MovieCard from '../components/MovieCard';
import CastCard from '../components/CastCard';

const cast = [
  {
    title: 'Daniel Lamarr',
    character: 'Lannister',
    photo: 'https://images.pexels.com/photos/3008141/pexels-photo-3008141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Daniel Lamarr',
    character: 'Lannister',
    photo: 'https://images.pexels.com/photos/3008141/pexels-photo-3008141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Daniel Lamarr',
    character: 'Lannister',
    photo: 'https://images.pexels.com/photos/3008141/pexels-photo-3008141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Daniel Lamarr',
    character: 'Lannister',
    photo: 'https://images.pexels.com/photos/3008141/pexels-photo-3008141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Daniel Lamarr',
    character: 'Lannister',
    photo: 'https://images.pexels.com/photos/3008141/pexels-photo-3008141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Daniel Lamarr',
    character: 'Lannister',
    photo: 'https://images.pexels.com/photos/3008141/pexels-photo-3008141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Daniel Lamarr',
    character: 'Lannister',
    photo: 'https://images.pexels.com/photos/3008141/pexels-photo-3008141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Daniel Lamarr',
    character: 'Lannister',
    photo: 'https://images.pexels.com/photos/3008141/pexels-photo-3008141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Daniel Lamarr',
    character: 'Lannister',
    photo: 'https://images.pexels.com/photos/3008141/pexels-photo-3008141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    title: 'Daniel Lamarr',
    character: 'Lannister',
    photo: 'https://images.pexels.com/photos/3008141/pexels-photo-3008141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
]

export default class SingleMovie extends Component {
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
              <div className="plot">
                <Text color="#fff" fontSize={20}>PLOT</Text>
                <Text color="#fff">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eg Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate egLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                </Text>
              </div>
            </div>
          </section>
          <section id="movie-cast">
            <div className="cast-title">
              <Text color="#fff">Cast</Text>
            </div>
            <div className="casts">
              {cast.map(cs => (
                <CastCard cast={cs} />
              ))}
            </div>
          </section>
        </main>
      </div>
    )
  }
}
