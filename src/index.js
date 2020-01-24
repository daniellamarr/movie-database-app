import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import compression from "compression";
import {config} from "dotenv";

//Router Definitions
import MoviesRouter from "./routes/movies";

//Helper Functions
import {debugLogger, prettyStringify} from "./util/logger";

config();
//Config Variables
const URL_PREFIX = "/api/v1";
const PORT = process.env.PORT || 7000;

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
		"access-control-request-method":
			req.headers["access-control-request-method"],
		origin: req.headers.origin,
		"user-agent": req.headers["user-agent"],
		"access-control-request-headers":
			req.headers["access-control-request-headers"],
		referer: req.headers.referer
	};
	debugLogger(`Request body: ${prettyStringify(req.body)}`);
	debugLogger(`Request params: ${prettyStringify(req.params)}`);
	debugLogger(`Request query: ${prettyStringify(req.query)}`);
	debugLogger(`Request headers: ${prettyStringify(requiredHeaders)}`);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, Authorization"
	);
	res.header(
		"Access-Control-Request-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, Authorization"
	);
	next();
});

//Models

//Routers
app.use(`${URL_PREFIX}/movies`, MoviesRouter({express}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
	res.status(404).json({
		error: ["Path does not exist"],
		message: "This route doesn't exist for you!"
	});
	next();
});

// Express Error Handler
app.use((error, req, res) => {
	const responseObj = {
		status: "error",
		message: "Something went wrong",
		errorMessage: error.message
	};
	if (process.env.NODE_ENV === "development") {
		responseObj.errorStack = error.stack;
		responseObj.errors = error.errors || error.response || [];
	}
	return res.status(error.statusCode).json(responseObj);
});

app.listen(PORT, () => {
	debugLogger(`App Running on PORT: ${PORT}`);
});
