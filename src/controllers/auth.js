import { trimUser } from '../util/user';

/**
 * Auth Controller Initialization Function
 * @param {Object} ControllerParams - ControllerParams
 * @param {Object} ControllerParams.jwt - JsonWebToken
 * @param {Object} ControllerParams.bcrypt - BcryptJS
 * @param {Object} ControllerParams.userModel - Sequelize User Model
 * @returns {Object} Controller Object
 */
export default ({ jwt, bcrypt, userModel }) => {
  // Controller Methods
  const signup = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      let user = await userModel.findOne({ where: { email } });
      if (user) {
        const duplicateError = new Error(`User with email - ${email} already exists`);
        duplicateError.statusCode = 400;
        throw duplicateError;
      }
      user = await userModel.create({
        username,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      const trimmedUser = trimUser(user);

      const token = jwt.sign({ user: trimmedUser }, process.env.JWT_SECRET, {
        expiresIn: '24h',
      });

      return res.status(201).json({
        status: 'success',
        message: 'User Signup Successful',
        data: trimmedUser,
        token,
      });
    } catch (error) {
      if (!error.statusCode) error.statusCode = 500;
      return next(error);
    }
  };
  const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ where: { email } });
      if (!user) {
        const notFoundError = new Error('User not Found');
        notFoundError.statusCode = 404;
        throw notFoundError;
      }

      const passwordCheck = await bcrypt.compare(password, user.password);
      if (!passwordCheck) {
        const incorrectPasswordError = new Error('Password is incorrect');
        incorrectPasswordError.statusCode = 400;
        throw incorrectPasswordError;
      }

      const trimmedUser = trimUser(user);

      const token = jwt.sign({ user: trimmedUser }, process.env.JWT_SECRET, {
        expiresIn: '24h',
      });

      return res.status(200).json({
        status: 'success',
        message: 'User Login Successful',
        data: trimmedUser,
        token,
      });
    } catch (error) {
      if (!error.statusCode) error.statusCode = 500;
      return next(error);
    }
  };
  return { signup, login };
};
