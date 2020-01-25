import {trimUser} from '../util/user';

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

            if(!user){
                const userNotFoundError = new Error(`User with email - ${req.user.email} Not Found`);
                userNotFoundError.statusCode = 404;
                throw userNotFoundError;
            }

            const updatedUser = await user.update({
                watchlist: [...user.dataValues.watchlist, req.body.movieId] 
            });

            const trimmedUser = trimUser(updatedUser);

            return res.status(200).json({
                status: 'success',
                message: 'Movie Added to Watchlist',
                data: trimmedUser
            });
        } catch (error) {
            if (!error.statusCode) error.statusCode = 500;
			return next(error);
        }
    };
    return {addToWatchlist};
};
