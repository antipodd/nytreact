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

// Arrow functions are best suited for non-method functions so function is used here instead of fat arrow
const helpers = {
	searchQuery: function(query, startDate, endDate) {
		let query = query.trim();
		let startDate = `${startDate.trim()}0101`;
		let endDate = `${endDate.trim()}1231`;

		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
			params: {
				"api-key": APIKey,
				"q": query,
				"begin_date": startDate,
				"end_date": endDate
			}

		})
	}
}

export default helpers;