import ReviewController from '../controllers/reviews';
import AuthMiddleware from '../middlewares/auth';

/**
 * Review Router Initialization Function
 * @param  {Object} RouterParams - Router Parameters
 * @param  {Object} RouterParams.express - Express
 * @param {Object} RouterParams.jwt - JsonWebToken
 * @param {Object} RouterParams.expressValidator - Express Validator
 * @param {Object} RouterParams.validator - Custom Validator
 * @param {Object} RouterParams.userModel - Initialized User Model
 * @param {Object} RouterParams.reviewModel - Initialized Review Model
 * @returns {Object} ExpressRouter
 */
export default ({
  express,
  jwt,
  expressValidator,
  validator,
  userModel,
  reviewModel,
}) => {
  const reviewRouter = express.Router();
  const authMiddleware = AuthMiddleware({jwt});
  const reviewController = ReviewController({userModel, reviewModel});

  reviewRouter.get(
    '/',
    [
      expressValidator('movieId')
        .trim()
        .isNumeric()
        .withMessage('Movie ID is required'),
    ],
    validator,
    reviewController.getReviews
  );

  reviewRouter.post(
    '/',
    authMiddleware.verifyToken,
    [
      expressValidator('movieId')
        .trim()
        .isNumeric()
        .withMessage('Movie ID is required'),
      expressValidator('review')
        .trim()
        .isString(),
    ],
    validator,
    reviewController.reviewMovie
  );

  return reviewRouter;
};
