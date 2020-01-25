import {trimUser} from "../util/user";
import {movieDbServiceClient} from "../util/api";

/**
 * User Controller Initialization Function
 * @param {Object} ControllerParams - ControllerParams
 * @param {Object} ControllerParams.userModel - Sequelize User Model
 * @returns {Object} Controller Object
 */
export default ({userModel}) => {
	const addToWatchlist = async (req, res, next) => {
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
					url: `/${req.body.movieId}`,
					method: "get"
				});
			} catch (error) {
				if (error?.response?.data?.status_message.includes("could not be found")) {
					const movieNotFoundError = new Error(
						"A movie with that ID can't be found"
					);
					movieNotFoundError.statusCode = 404;
					throw movieNotFoundError;
				} else {
					throw error;
				}
			}

			const updatedUser = await user.update({
				watchlist: [...user.dataValues.watchlist, req.body.movieId]
			});

			const trimmedUser = trimUser(updatedUser);

			return res.status(200).json({
				status: "success",
				message: "Movie Added to Watchlist",
				data: trimmedUser
			});
		} catch (error) {
			if (!error.statusCode) error.statusCode = 500;
			return next(error);
		}
    };
    
    const removeFromWatchlist = async(req, res, next) => {
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
					url: `/${req.body.movieId}`,
					method: "get"
				});
			} catch (error) {
				if (error?.response?.data?.status_message.includes("could not be found")) {
					const movieNotFoundError = new Error(
						"A movie with that ID can't be found"
					);
					movieNotFoundError.statusCode = 404;
					throw movieNotFoundError;
				} else {
					throw error;
				}
            }

            const updatedUser = await user.update({
				watchlist: user.dataValues.watchlist.filter(movieId => {
                    return movieId !== req.body.movieId
                })
			});

			const trimmedUser = trimUser(updatedUser);

			return res.status(200).json({
				status: "success",
				message: "Movie Removed from Watchlist",
				data: trimmedUser
			});
            
        } catch (error) {
            if (!error.statusCode) error.statusCode = 500;
			return next(error);
        }
    }
	return {addToWatchlist,removeFromWatchlist};
};
