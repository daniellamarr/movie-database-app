import {movieDbServiceClient} from "../util/api";

/**
 * Movies Controller Initialization Function
 * @returns {Object} Controller Object
 */
export default () => {
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
	const getLatestMovies = async (req, res, next) => {
		try {
			const {page} = req.query;
			const movieData = await movieDbServiceClient({
				url: "/now_playing",
				method: "get",
				params: {
					page
				}
			});
			const moviesResult = {...movieData.data};
			const sortedMovies = sortMovies(moviesResult.results);
			moviesResult.results = [...sortedMovies];
			return res.status(200).json({
                status: 'success',
                message: 'Latest Movies Fetched',
				data: moviesResult
			});
		} catch (error) {
			if (!error.statusCode) error.statusCode = 500;
			return next(error);
		}
	};

	return {getLatestMovies};
};
