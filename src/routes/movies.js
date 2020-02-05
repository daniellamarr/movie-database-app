import MoviesController from '../controllers/movies';
import AuthMiddleware from '../middlewares/auth';

/**
 * Movies Router Initialization Function
 * @param  {Object} RouterParams - Router Parameters
 * @param  {Object} RouterParams.express - Express
 * @param {Object} RouterParams.expressValidator - Express Validator
 * @param {Object} RouterParams.validator - Custom Validator
 * @param {Object} RouterParams.jwt - Jsonwebtoken
 * @param {Object} RouterParams.userModel - Initialized User Model
 * @returns {Object} ExpressRouter
 */
export default ({express, expressValidator, validator, jwt, userModel}) => {
  const moviesRouter = express.Router();
  const authMiddleware = AuthMiddleware({jwt});
  const moviesController = MoviesController({userModel});

  moviesRouter.get(
    '/',
    [
      expressValidator('page')
        .not()
        .isEmpty()
        .withMessage('Page No is Required'),
    ],
    validator,
    moviesController.getLatestMovies
  );

  moviesRouter.get(
    '/search',
    [
      expressValidator('query')
        .trim()
        .isString()
        .withMessage('Search Query is required'),
    ],
    validator,
    moviesController.searchForMovies
  );

  moviesRouter.get(
    '/watchlist',
    authMiddleware.verifyToken,
    moviesController.getWatchlistMovies
  );

  moviesRouter.get(
    '/:id',
    [
      expressValidator('id')
        .not()
        .isEmpty()
        .withMessage('Movie ID is required'),
    ],
    validator,
    moviesController.getSingleMovieDetails
  );

  return moviesRouter;
};
