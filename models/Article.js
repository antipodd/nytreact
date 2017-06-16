// ******************************************************************************
// Article.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var mongoose = require('mongoose');

// =============================================================
// *** Create Schema
// =============================================================
var Schema = mongoose.Schema;

var SavedArticle = new Schema ({
	title: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	date: {
		type: Date,
		require: true
	},
	url: {
		type: String,
		required: true
	}
	
});

// =============================================================
// *** Create Article Model
// =============================================================
var Article = mongoose.model('Article', SavedArticle);

// =============================================================
// *** Export the Article Model
// =============================================================
module.exports = Article;