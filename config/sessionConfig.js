// sessionConfig.js
const session = require("express-session");
const MongoStore = require("connect-mongo");

const configureSession = () => {
	const { MONGODB_URL, SESSION_SECRET } = process.env;

	return session({
		name: "habitTracker",
		secret: SESSION_SECRET || "defaultSecret",
		saveUninitialized: false,
		resave: false,
		cookie: {
			maxAge: 1000 * 60 * 100,
		},
		store: MongoStore.create(
			{
				mongoUrl: MONGODB_URL || "mongodb://localhost:27017/HabitTracker",
				autoRemover: "disabled",
			},
			function (err) {
				console.log("Error in the mongo-store");
			}
		),
	});
};

module.exports = configureSession;
