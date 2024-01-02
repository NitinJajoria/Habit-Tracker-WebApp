const mongoose = require("mongoose");

const DB =
	"mongodb+srv://nitinjajoria97:nitinjajoria123@cluster1.798a1pd.mongodb.net/HabitTracker?retryWrites=true&w=majority";

mongoose
	.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
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
