import React, { Component } from 'react';
import Header from '../components/Header';
import Text from '../components/Text';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
import CastCard from '../components/CastCard';
import { apiServiceClient } from '../util/axios-client';
import Reviews from '../components/Reviews';
import Axios from 'axios';
import Loader from '../components/Loader';

const { API_ROOT } = process.env;

export default class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: false,
      review: [],
      addedToWatchlist: false
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
  // TODO
  getReviews() {
    const { movieId } = this.props.match.params;
    Axios.get(`${API_ROOT}/review?movieId=${movieId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      this.setState({review: res.data.data})
      if (res.data.status === "success") {
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
              const userData = JSON.parse(localStorage.getItem('userData'));
              userData.watchlist = res.data.data.watchlist;
              localStorage.setItem('userData', JSON.stringify(userData));
              this.checkWatchList(movie);
            }
        }).catch((err)=>{
            alert(err)
        })
  }

  removeFromWatchList (movie){
		var userToke = localStorage.getItem("token")
		var data = {movieId:movie}
		Axios.post(`${API_ROOT}/user/watchlist/remove`, data, {
            headers: {
                'x-access-token': `moviedb${userToke}`,
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.data.status == "success") {
              alert(res.data.message)
              const userData = JSON.parse(localStorage.getItem('userData'));
              userData.watchlist = res.data.data.watchlist;
              localStorage.setItem('userData', JSON.stringify(userData));
              this.checkWatchList(movie);
            }
        }).catch((err)=>{
            alert(err)
        })
  }
  
  checkWatchList() {
    const { movieId } = this.props.match.params;
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData !== null) {
      return this.setState({ addedToWatchlist: userData.watchlist.includes(Number(movieId)) });
    }
  }

  componentDidMount() {
    this.checkWatchList();
    this.getReviews();
    this.getSingleMovie();
  }

  render() {
    const { movie } = this.state;
    const rating = Math.floor((movie.vote_average / 10) * 5);
    return (
      <div>
        <Header />
        {!this.state.loading ? (
          <main id="landing">
            <section id="primary-movie"
              style={{backgroundImage: `url(${movie.backdrop_path})`}}>
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
                    {this.state.addedToWatchlist ?
                    <button onClick={() => { this.removeFromWatchList(movie.id) }}>
                      Remove from watchlist
                    </button>
                    :
                    <button onClick={() => { this.addToWatchList(movie.id) }}>
                      Add to watchlist
                    </button>}
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
              <div className="movie-photo" style={{backgroundImage: `url(${movie.poster_path})`}}></div>
            </section>
            <section id="movie-cast">
              <div className="cast-title">
                <Text color="#fff">Cast</Text>
              </div>
              <div className="casts">
                {movie.credits && movie.credits.cast.map((cast, index) => (
                  <CastCard key={index} cast={cast} />
                ))}
              </div>
            </section>
            <section id="movie-cast">
              <Reviews movieDetail={movie} reviews={this.state.review} />
            </section>
          </main>
          ) : <div className="fixed-loader"><Loader /><p>Fetching Movie</p></div>}
      </div>
    )
  }
}
