const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

mongoose
	.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connection successful!");
	})
	.catch((err) => console.error("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", () => {
	console.log("Connected to Database :: MongoDB");
});

module.exports = db;
