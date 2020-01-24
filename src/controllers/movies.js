import {movieDbServiceClient} from "../util/api";

/**
 * Movies Controller Initialization Function
 * @returns {Object} Controller Object
 */
export default () => {
	// Helper Methods
	const sortMovies = movieList => {
		return movieList.sort((movieA, movieB) => {
			const movieADateTime = new Date(movieA.release_date).getTime();
			const movieBDateTime = new Date(movieB.release_date).getTime();
			let comparison = 0;
			if (movieADateTime > movieBDateTime) {
				comparison = 1;
			} else if (movieBDateTime < movieADateTime) {
				comparison = -1;
			}
			return comparison * -1;
		});
	};

	const addFullImagePath = movieObj => {
		return {
			...movieObj,
			poster_path: movieObj.poster_path
				? `https://image.tmdb.org/t/p/w500${movieObj.poster_path}`
				: null,
			backdrop_path: movieObj.backdrop_path
				? `https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`
				: null
		};
	};

	// Controller Methods
	const getLatestMovies = async (req, res, next) => {
		try {
			const {page} = req.query;
			const moviesResult = (
				await movieDbServiceClient({
					url: "/now_playing",
					method: "get",
					params: {
						page
					}
				})
			).data;
			const sortedMovies = sortMovies(moviesResult.results);
			moviesResult.results = [...sortedMovies].map(addFullImagePath);
			return res.status(200).json({
				status: "success",
				message: "Latest Movies Fetched",
				data: moviesResult
			});
		} catch (error) {
			if (!error.statusCode) error.statusCode = 500;
			return next(error);
		}
	};

	const getSingleMovieDetails = async (req, res, next) => {
		try {
			const {id} = req.params;
			let movieData = (
				await movieDbServiceClient({
					url: `/${id}`,
					method: "get",
					params: {
						append_to_response: "credits"
					}
				})
			).data;
			movieData = addFullImagePath(movieData);
			return res.status(200).json({
				status: "success",
				message: "Fetched Movie Details",
				data: movieData
			});
		} catch (error) {
			if (!error.statusCode) error.statusCode = 500;
			return next(error);
		}
	};

	return {getLatestMovies, getSingleMovieDetails};
};
