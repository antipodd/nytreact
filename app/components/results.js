// ******************************************************************************
// results.js 
// 
// ******************************************************************************
// *** Dependencies
// =============================================================

import React from "react";

import helpers from "../utils/helpers"


class Results extends React.Component {
	constructor(props) {
		super(props); // Component has its own constructor function
		this.handleSearch = this.handleSearch.bind(this);
		this.saveArticle = this.saveArticle.bind(this);
	}

	saveArticle(article) {
		helpers.saveArticle(article)
			.then((result) => {
				console.log("saved")
			})
	}

	handleSearch () {
		return this.props.search.data.response.docs.slice(0,5).map((article, number) => {
			  				return (
			  					<div className="panel-body" key={number}>
			  						<h3><a href={article.web_url}>{article.headline.main}</a></h3>
			  						<p>Date Published: {new Date(article.pub_date).toString()}</p>
			  						<button
                            			className = "btn btn-info"
			                            onClick = {this.saveArticle}>
			                            Save Article
		                        	</button>
			  					</div>
			  				)
				  })
	}

	render() {
		return (
			<div className="row">
				<div className="container">
					<div className="panel panel-primary">
	                    <div className="panel-heading">
	                        <h3 className="panel-title">Results</h3>
	                    </div>
						{this.props.search ? 
								 this.handleSearch() : <div>loading..</div>
					  	}
					  	
					</div>
				</div>
			</div>
		)
	}
}

export default Results;


