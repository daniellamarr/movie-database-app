import MoviesController from "../controllers/movies";

/**
 * Movies Router Initialization Function
 * @param  {Object} RouterParams - Router Parameters
 * @param  {Object} RouterParams.express - Express
 * @param {Object} RouterParams.expressValidator - Express Validator
 * @param {Object} RouterParams.validator - Custom Validator
 * @returns {Object} ExpressRouter
 */
export default ({express, expressValidator, validator}) => {
	const moviesRouter = express.Router();
	const moviesController = MoviesController();

	moviesRouter.get(
		"/",
		[
			expressValidator("page")
				.not()
				.isEmpty()
				.withMessage("Page No is Required")
		],
		validator,
		moviesController.getLatestMovies
	);

	moviesRouter.get(
		"/:id",
		[
			expressValidator("id")
				.not()
				.isEmpty()
				.withMessage("Movie ID is required")
		],
		validator,
		moviesController.getSingleMovieDetails
	);

	return moviesRouter;
};
