import {movieDbServiceClient} from '../util/api';

/**
 * Movies Controller Initialization Function
 * @param {Object} ControllerParams - Controller Parameters
 * @param {Object} ControllerParams.userModel - Initialized User Model
 * @param {Object} ControllerParams.reviewModel - Initialized Review Model
 * @returns {Object} Controller Object
 */
export default ({userModel, reviewModel}) => {
  // Helper Methods
  const sortMovies = movieList =>
    movieList.sort((movieA, movieB) => {
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

  const addFullImagePath = movieObj => {
    const credits = {...movieObj?.credits};
    Object.keys(credits).forEach(personListIndex => {
      const modifiedPersonList = credits[personListIndex].map(personObj => ({
        ...personObj,
        profile_path: personObj.profile_path
          ? `https://image.tmdb.org/t/p/w500${personObj.profile_path}`
          : null,
      }));
      credits[personListIndex] = [...modifiedPersonList];
    });
    const modifiedMovieObj = {
      ...movieObj,
      poster_path: movieObj.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieObj.poster_path}`
        : null,
      backdrop_path: movieObj.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`
        : null,
    };
    if (credits.casts || credits.crew) {
      modifiedMovieObj.credits = {...credits};
    }
    return modifiedMovieObj;
  };

  const addGenresToMovies = (movieObj, genreListResult) => {
    // Get Genre for each genre ID in movie Object
    const genres = movieObj.genre_ids.map(genreId => {
      const genreIndex = genreListResult.genres.findIndex(
        genreObj => genreObj.id === genreId
      );
      return genreListResult.genres[genreIndex];
    });

    return {...movieObj, genres};
  };

  // Controller Methods
  const getLatestMovies = async (req, res, next) => {
    try {
      const {page} = req.query;

      const genreListResult = (
        await movieDbServiceClient({
          url: '/genre/movie/list',
          method: 'get',
        })
      ).data;

      const moviesResult = (
        await movieDbServiceClient({
          url: '/movie/now_playing',
          method: 'get',
          params: {
            page,
          },
        })
      ).data;
      const sortedMovies = sortMovies(moviesResult.results);
      moviesResult.results = [...sortedMovies].map(addFullImagePath);
      moviesResult.results = moviesResult.results.map(movieObj =>
        addGenresToMovies(movieObj, genreListResult)
      );
      return res.status(200).json({
        status: 'success',
        message: 'Latest Movies Fetched',
        data: moviesResult,
      });
    } catch (error) {
      if (!error.statusCode) error.statusCode = 500;
      return next(error);
    }
  };

  const getSingleMovieDetails = async (req, res, next) => {
    try {
      const {id} = req.params;
      let movieData;
      try {
        movieData = (
          await movieDbServiceClient({
            url: `/movie/${id}`,
            method: 'get',
            params: {
              append_to_response: 'credits',
            },
          })
        ).data;
      } catch (error) {
        if (error.response.data.status_message.includes('could not be found')) {
          const movieNotFoundError = new Error(
            "A movie with that ID can't be found"
          );
          movieNotFoundError.statusCode = 404;
          throw movieNotFoundError;
        } else {
          throw error;
        }
      }

      movieData = addFullImagePath(movieData);
      return res.status(200).json({
        status: 'success',
        message: 'Fetched Movie Details',
        data: movieData,
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

  const searchForMovies = async (req, res, next) => {
    try {
      const {query} = req.query;

      const genreListResult = (
        await movieDbServiceClient({
          url: '/genre/movie/list',
          method: 'get',
        })
      ).data;

      const searchResult = (
        await movieDbServiceClient({
          url: '/search/movie',
          method: 'get',
          params: {
            query,
          },
        })
      ).data;

      let response;
      if (searchResult.results.length > 0) {
        const sortedMovies = sortMovies(searchResult.results);
        searchResult.results = [...sortedMovies].map(addFullImagePath);
        searchResult.results = searchResult.results.map(movieObj =>
          addGenresToMovies(movieObj, genreListResult)
        );
        response = {
          status: 'success',
          message: 'Search Successful',
          data: searchResult,
        };
      } else {
        response = {
          status: 'notfound',
          message: `No Results found for your search: ${query}`,
        };
      }

      return res.status(200).json(response);
    } catch (error) {
      if (!error.statusCode) error.statusCode = 500;
      return next(error);
    }
  };

  return {
    getLatestMovies,
    getSingleMovieDetails,
    reviewMovie,
    searchForMovies,
  };
};
