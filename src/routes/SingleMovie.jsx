import React, { Component } from 'react';
import Header from '../components/Header';
import Text from '../components/Text';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
import CastCard from '../components/CastCard';
import { apiServiceClient } from '../util/axios-client';
import Reviews from '../components/Reviews';
import Axios from 'axios';

const { API_ROOT } = process.env;


export default class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: false
    };
  }

  async getSingleMovie() {
    const { movieId } = this.props.match.params;
    this.setState({ loading: true });
    const movieData = await apiServiceClient({
      url: `/movies/${movieId}`,
      method: "get"
    });
    this.setState({ movie: movieData.data.data, loading: false });
  }
  addToWatchList(movie) {
    var userToke = localStorage.getItem("token")
    const data = { movieId: movie }
    Axios.post(`${API_ROOT}/user/watchlist/add`, data, {
      headers: {
        'x-access-token': `moviedb${userToke}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.data.status == "success") {
        alert(res.data.message)
      }
    }).catch((err) => {
      alert(err)
    })
  }
  getReviews() {
    const { movieId } = this.props.match.params
    var userToke = localStorage.getItem("token")
    var data = { movieId: movieId }
    Axios.get(`${API_ROOT}/review?movieId=${movieId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.data.status == "success") {
      }
    }).catch((err) => {
    })
  }
  addToWatchList (movie){
		var userToke = localStorage.getItem("token")
		var data = {movieId:movie}
		Axios.post(`${API_ROOT}/user/watchlist/add`, data, {
            headers: {
                'x-access-token': `moviedb${userToke}`,
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.data.status == "success") {
				alert(res.data.message)
            }
        }).catch((err)=>{
            alert(err)
        })
	}

  componentDidMount() {
    this.getReviews();
    this.getSingleMovie();
  }

  render() {
    const { movie } = this.state;
    const rating = Math.floor((movie.vote_average / 10) * 5);
    return (
      <div>
        <Header />
        <main id="landing">
          <section id="primary-movie"
            style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
            <div className="primary-movie-details">
              <div className="movie-title">
                <Text color="#fff" fontSize={40}>
                  {this.state.movie.title}
                </Text>
              </div>
              <div className="movie-reviews">
                <div className="rating">
                  <Rating noOfStars={rating} checkType="checked" />
                </div>
                <div className="runtime">
                  <Text color="#fff" fontSize={16}>{movie.runtime} mins</Text>
                </div>
              </div>
              <div className="credits-watchlist">
                <div className="movie-credits">
                  <Text color="#fff" fontSize={25}>
                    {new Date(movie.release_date).getFullYear()}
                  </Text>
                </div>
                <div className="movie-watchlist">
                  <button onClick={() => { this.addToWatchList(movie.id) }}>
                    Add to watchlist
                  </button>
                </div>
              </div>
              <div className="tags">
                {movie.genres &&
                  movie.genres.map(genre => (
                    <Tag key={genre.id}>{genre.name}</Tag>
                  ))}
              </div>
              <div className="plot">
                <Text color="#fff" fontSize={20}>Overview</Text>
                <Text color="#fff">
                  {movie.overview}
                </Text>
              </div>
            </div>
            <div className="movie-photo" style={{ backgroundImage: `url(${movie.poster_path})` }}></div>
          </section>
          <section id="movie-cast">
            <div className="cast-title">
              <Text color="#fff">Cast</Text>
            </div>
            <div className="casts">
              {movie.credits && movie.credits.cast.map(cast => (
                <CastCard cast={cast} />
              ))}
            </div>
          </section>
          <section id="movie-cast">
            <Reviews movieDetail={movie} />
          </section>
        </main>
      </div>
    )
  }
}
