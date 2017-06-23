// ******************************************************************************
// helpers.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import axios from "axios";

// ******************************************************************************
// *** Define NYT API key
// =============================================================
const APIKey = "0bd5619e987544849bf1e49996358114";


// ******************************************************************************
// *** Helper functions 
// =============================================================

// Arrow functions are best suited for non-method functions 
const helpers = {
	searchQuery (query, startDate, endDate) {
		let queries = query.trim();
		let start = `${startDate.trim()}0101`;
		let end = `${endDate.trim()}1231`;

		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
			params: {
				"api-key": APIKey,
				"q": queries,
				"begin_date": start,
				"end_date": end
			}

		})
	},

	saveArticle (article) {
		//console.log(article)
		console.log(article.title, article.date, article.url)
		return axios.post("/api", article)
	},

	getArticles () {
		return axios.get("/api");
	},

	deleteArticle (article) {
		console.log(article.id)
		return axios.post(`/delete/${article.id}`)
	}
}

export default helpers;