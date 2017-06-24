// ******************************************************************************
// Server.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const Article = require("./models/Article");
/*// =============================================================
// *** Import Models
// =============================================================
var Article = require(".models/Article.js");
var Comment = require(".models/Comment.js");*/

// =============================================================
// *** Set mongoose to leverage built in JavaScript ES6 Promises
// =============================================================
mongoose.Promise = Promise;

// =============================================================
// *** Initialize Express
// =============================================================
const app = express();

// =============================================================
// *** Database configuration with Mongoose
// =============================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/week19nytreact");
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", (error) => {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", () => {
  console.log("Mongoose connection successful.");
});

// =============================================================
// *** Configure Port
// =============================================================
const port = process.env.PORT || 3000;

// =============================================================
// *** Set BodyParser and Morgan
// =============================================================
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// =============================================================
// *** Serve static content for the app from the "public" directory in the application directory.
// =============================================================
app.use(express.static(process.cwd() + "/public"));

// =============================================================
// *** Import and use Routes
// =============================================================

// Get all the saved articles
app.get("/api", function(req, res) {

	Article.find({}).exec(function(err, doc) {

	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
  	});
});

// Post the selected article to MongoDB
app.post("/api", function(req, res) {

	const savedArticle = new Article(req.body);
	//console.log(req.body);

    savedArticle.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
            res.end();
        }

    });
});

// Delete the selected article
app.post("/delete/:id", function(req, res) {
  console.log(req.params);
  Article.remove({"_id": req.params.id}, function(err, doc) {
        if (err) {
            console.log(err);
        } else {
          console.log("deleted");
          res.json(doc)
        }
  });
});
  
  
  

// =============================================================
// *** Express port listener
// =============================================================
app.listen(port, () => {
  console.log("App running on port " + port);
});