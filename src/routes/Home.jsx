import React, { Component } from "react";
import Header from "../components/Header";
import Text from "../components/Text";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import MovieCard from "../components/MovieCard";
import { apiServiceClient } from "../util/axios-client";
import { Link } from "react-router-dom";
import Axios from 'axios';

const { API_ROOT } = process.env;



export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			loading: false,
			page: 1,
			loadMore: false
		};
	}

	async getMovies(page = 1, loading = true, loadMore = false) {
		this.setState({ loading, loadMore });
		const movieData = await apiServiceClient({
			url: "/movies",
			method: "get",
			params: {
				page
			}
		});
		this.setState({
			movies: [...this.state.movies, ...movieData.data.data.results],
			loading: false,
			loadMore: false
		});
	}

	recallGetMovies() {
		this.getMovies(this.state.page + 1, false, true);
		this.setState({ page: this.state.page + 1 });
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
		this.getMovies();
	}

	render() {
		const latestMovie = this.state.movies[0] || {};
		return (
			<div>
				<Header />
				{!this.state.loading ? (
					<main id="landing">
						<section
							id="primary-movie"
							style={{ backgroundImage: `url(${latestMovie.backdrop_path})` }}
						>
							<div className="primary-movie-details">
								<div className="movie-title">
									<Text color="#fff" fontSize={40}>
										{latestMovie?.title}
									</Text>
								</div>
								<div className="movie-reviews">
									<Rating
										noOfStars={Math.floor((latestMovie.vote_average / 10) * 5)}
										checkType="checked"
									/>
								</div>
								<div className="credits-watchlist">
									<div className="movie-credits">
										<Text color="#fff" fontSize={25}>
											{latestMovie.release_date && new Date(latestMovie.release_date).getFullYear()}
										</Text>
									</div>
									<div className="movie-watchlist">
										<button onClick={()=>{this.addToWatchList(latestMovie.id)}}>
											Add to watchlist
                    					</button>
									</div>
								</div>
								<div className="tags">
									{latestMovie.genres &&
										latestMovie.genres.map(genre => (
											<Tag key={genre.id}>{genre.name}</Tag>
										))}
								</div>
							</div>
							<div className="movie-photo" style={{ backgroundImage: `url(${latestMovie.poster_path})` }}></div>
						</section>
						<section id="latest-movies">
							<div className="latest-header">
								<div className="title">
									<Text color="#fff">Recently Added</Text>
								</div>
								<div className="sort"></div>
							</div>
							<div className="movies">
								{this.state.movies.map(movie => (
									<MovieCard key={movie.id} movie={movie} />
								))}
							</div>
							<div className="loadMore">
								<button onClick={() => this.recallGetMovies()}>
									{this.state.loadMore ? 'Loading...' : 'Load More'}
								</button>
							</div>
						</section>
					</main>
				) : null}
			</div>
		);
	}
}
