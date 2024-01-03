const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 9000;
const configureSession = require("./config/sessionConfig");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");
const flash = require("connect-flash");
const flashMiddleware = require("./config/flashMiddleware");
const passport = require("passport");
const passportLocal = require("./config/passport_local");

// Middleware configuration
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));

// Setting view engine as "EJS"
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./assets"));

// Passport configuration
app.use(configureSession()); // express-session
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// flash connection
app.use(flash());
app.use(flashMiddleware.setFlash);

// Route middleware
app.use("/", require("./routes"));

app.listen(port, (err) => {
	if (err) {
		console.log("Error", err);
		return;
	}
	console.log(`Server is running at http://localhost:${port}`);
});
