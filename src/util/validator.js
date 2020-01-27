import { validationResult } from 'express-validator';

export default (req, res, next) => {
  const validatorErrors = validationResult(req);
  if (!validatorErrors.isEmpty()) {
    const error = new Error('Validation Error');
    error.statusCode = 422;
    error.errors = validatorErrors.array();
    return next(error);
  }
  return next();
};
