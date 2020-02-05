import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import {config} from 'dotenv';
import jwt from 'jsonwebtoken';
import {check} from 'express-validator';
import Sequelize from 'sequelize';
import bcrypt from 'bcryptjs';

// /Model Definitions
import UserModel from './models/user';
import ReviewModel from './models/review';

// Router Definitions
import MoviesRouter from './routes/movies';
import AuthRouter from './routes/auth';
import UserRouter from './routes/user';
import ReviewRouter from './routes/reviews';

// Helper Functions
import initializeDatabase from './util/db';
import {debugLogger, prettyStringify} from './util/logger';
import validator from './util/validator';

config();
// Config Variables
const URL_PREFIX = '/api/v1';
const PORT = process.env.PORT || 7000;

// Initialize Db Connection
const db = initializeDatabase({Sequelize});

const app = express();
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Enable CORS
app.use((req, res, next) => {
  const requiredHeaders = {
    host: req.headers.host,
    connection: req.headers.connection,
    'access-control-request-method': req.headers['access-control-request-method'],
    origin: req.headers.origin,
    'user-agent': req.headers['user-agent'],
    'access-control-request-headers': req.headers['access-control-request-headers'],
    referer: req.headers.referer,
  };
  debugLogger(`Request body: ${prettyStringify(req.body)}`);
  debugLogger(`Request params: ${prettyStringify(req.params)}`);
  debugLogger(`Request query: ${prettyStringify(req.query)}`);
  debugLogger(`Request headers: ${prettyStringify(requiredHeaders)}`);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, Authorization'
  );
  res.header(
    'Access-Control-Request-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, Authorization'
  );
  next();
});

// Models
const reviewModel = ReviewModel({Sequelize, db});
const userModel = UserModel({Sequelize, db, Review: reviewModel});

// Routers
app.get('/', (req, res) =>
  res.status(200).send(`
		<h2>Welcome to Movie Database App API</h2>
	`)
);

app.use(
  `${URL_PREFIX}/auth`,
  AuthRouter({
    express,
    jwt,
    expressValidator: check,
    validator,
    bcrypt,
    userModel,
  })
);

app.use(
  `${URL_PREFIX}/movies`,
  MoviesRouter({
    express,
    expressValidator: check,
    validator,
    jwt,
    userModel,
  })
);

app.use(
  `${URL_PREFIX}/user`,
  UserRouter({
    express,
    jwt,
    userModel,
    expressValidator: check,
    validator,
  })
);

app.use(
  `${URL_PREFIX}/review`,
  ReviewRouter({
    express,
    jwt,
    expressValidator: check,
    validator,
    userModel,
    reviewModel,
  })
);

// Express Error Handler
app.use((error, req, res, next) => {
  const responseObj = {
    status: 'error',
    message: 'Something went wrong',
    errorMessage: error.message,
  };

  if (process.env.NODE_ENV === 'development') {
    responseObj.errorStack = error.stack;
    responseObj.errors = error.errors || error.response || [];
  }
  return res.status(error.statusCode).json(responseObj);
});

// catch 404
app.use((req, res, next) =>
  res.status(404).json({
    error: ['Path does not exist'],
    message: "This route doesn't exist for you!",
  })
);

// Sync Database
db.sync()
  .then(() => {
    debugLogger('DB Connection has been established', 'movie-app/db');
    app.listen(PORT, () => {
      debugLogger(`App Running on PORT: ${PORT}`);
    });
  })
  .catch(error => {
    debugLogger(`Failed To connect to Database: ${error.message}`, 'movie-app/db');
  });
