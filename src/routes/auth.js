import AuthController from '../controllers/auth';

/**
 * Auth Router Initialization Function
 * @param  {Object} RouterParams - Router Parameters
 * @param  {Object} RouterParams.express - Express
 * @param {Object} RouterParams.jwt - JsonWebToken
 * @param {Object} RouterParams.bcrypt - BcryptJS
 * @param  {Object} RouterParams.userModel - User Model
 * @param  {Function} RouterParams.expressValidator - Exress Validator(check)
 * @param  {Object} RouterParams.validator - Custom Validator
 * @returns {Object} ExpressRouter
 */
export default ({express, jwt, bcrypt, userModel, expressValidator, validator}) => {
  const authRouter = express.Router();
  const authController = AuthController({jwt, bcrypt, userModel});

  authRouter.post(
    '/signup',
    [
      expressValidator('username')
        .trim()
        .isString(),
      expressValidator('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .normalizeEmail({
          gmail_remove_subaddress: false,
          gmail_remove_dots: false,
        }),
      expressValidator('password')
        .trim()
        .isLength({min: 7})
        .withMessage('Password should be 7 characters and above'),
    ],
    validator,
    authController.signup
  );

  authRouter.post(
    '/login',
    [
      expressValidator('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .normalizeEmail({
          gmail_remove_subaddress: false,
          gmail_remove_dots: false,
        }),
      expressValidator('password')
        .trim()
        .isLength({min: 7})
        .withMessage('Password should be 7 characters and above'),
    ],
    validator,
    authController.login
  );

  return authRouter;
};
