/**
 * Auth Middleware Initialization Function
 * @param  {Object} MiddlewareParams - Middleware Parameters
 * @param  {Object} MiddlewareParams.jwt - JsonWebToken
 * @returns {Object} AuthMiddleware
 */
export default ({jwt}) => {
	const verifyToken = async (req, res, next) => {
		try {
			let token = req.headers["x-access-token"] || req.headers.authorization;

			if (!token) {
                const authTokenNotFoundError = new Error('No Auth Token Provided');
                authTokenNotFoundError.statusCode = 401;
                throw authTokenNotFoundError;
			}

			token = token.slice(7, token.length);

			try {
				const decoded = await jwt.verify(token, process.env.JWT_SECRET);
				req.user = decoded.user;
				return next();
			} catch (error) {
                const invalidTokenError = new Error('Token is not valid');
                invalidTokenError.statusCode = 401;
                throw invalidTokenError;
			}
		} catch (error) {
			if (!error.statusCode) error.statusCode = 500;
			return next(error);
		}
	};

	return {verifyToken};
};
