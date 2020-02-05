import {movieDbServiceClient} from '../util/api';

/**
 * Review Controller Initialization Function
 * @param {Object} ControllerParams - Controller Parameters
 * @param {Object} ControllerParams.userModel - Initialized User Model
 * @param {Object} ControllerParams.reviewModel - Initialized Review Model
 * @returns {Object} Controller Object
 */
export default ({userModel, reviewModel}) => {
  // Controller Methods
  const getReviews = async (req, res, next) => {
    try {
      let reviews = await reviewModel.findAll({
        where: {movieId: req.query.movieId},
      });
      reviews = reviews.map(review => ({...review.dataValues}));
      return res.status(200).json({
        status: 'success',
        message: 'Reviews Retrieved',
        data: reviews,
      });
    } catch (error) {
      if (!error.statusCode) error.statusCode = 500;
      return next(error);
    }
  };
  const reviewMovie = async (req, res, next) => {
    try {
      const user = await userModel.findOne({where: {email: req.user.email}});

      if (!user) {
        const userNotFoundError = new Error(
          `User with email - ${req.user.email} Not Found`
        );
        userNotFoundError.statusCode = 404;
        throw userNotFoundError;
      }

      try {
        await movieDbServiceClient({
          url: `/movie/${req.body.movieId}`,
          method: 'get',
        });
      } catch (error) {
        if (error?.response?.data?.status_message.includes('could not be found')) {
          const movieNotFoundError = new Error(
            "A movie with that ID can't be found"
          );
          movieNotFoundError.statusCode = 404;
          throw movieNotFoundError;
        } else {
          throw error;
        }
      }

      let review = await reviewModel.findOne({
        where: {userId: req.user.id, movieId: req.body.movieId},
      });
      let responseStatus = 201;

      if (!review) {
        review = await reviewModel.create({
          movieId: req.body.movieId,
          content: req.body.review,
          userId: req.user.id,
        });
      } else {
        review = await review.update({
          content: req.body.review,
        });
        responseStatus = 200;
      }

      return res.status(responseStatus).json({
        status: 'success',
        message: 'Movie Reviewed',
        data: {review},
      });
    } catch (error) {
      if (!error.statusCode) error.statusCode = 500;
      return next(error);
    }
  };

  return {
    getReviews,
    reviewMovie,
  };
};
