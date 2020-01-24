import MoviesController from '../controllers/movies';

/**
 * Movies Router Initialization Function
 * @param  {Object} RouterParams - Router Parameters
 * @param  {Object} RouterParams.express - Express
 * @returns {Object} ExpressRouter
 */
export default ({express}) => {
    const moviesRouter = express.Router();
    const moviesController = MoviesController();

    moviesRouter.get('/', moviesController.getLatestMovies);

    moviesRouter.get('/:id', moviesController.getSingleMovieDetails);

    return moviesRouter;
};
