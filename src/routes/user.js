import UserController from '../controllers/user';
import AuthMiddleware from '../middlewares/auth';

/**
 * User Router Initialization Function
 * @param  {Object} RouterParams - Router Parameters
 * @param  {Object} RouterParams.express - Express
 * @param {Object} RouterParams.jwt - JsonWebToken
 * @param  {Object} RouterParams.userModel - User Model
 * @param  {Function} RouterParams.expressValidator - Exress Validator(check)
 * @param  {Object} RouterParams.validator - Custom Validator
 * @returns {Object} ExpressRouter
 */
export default ({express, jwt, userModel, expressValidator, validator}) => {
  const userRouter = express.Router();
  const authMiddleware = AuthMiddleware({jwt});
  const userController = UserController({userModel});

  userRouter.post(
    '/watchlist/add',
    authMiddleware.verifyToken,
    [
      expressValidator('movieId')
        .not()
        .isEmpty()
        .withMessage('Movie ID is required'),
    ],
    validator,
    userController.addToWatchlist
  );

  userRouter.post(
    '/watchlist/remove',
    authMiddleware.verifyToken,
    [
      expressValidator('movieId')
        .not()
        .isEmpty()
        .withMessage('Movie ID is required'),
    ],
    validator,
    userController.removeFromWatchlist
  );

  return userRouter;
};
