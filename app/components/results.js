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

	saveArticle(e) {
		console.log(e.target.dataset.title, e.target.dataset.web_url, e.target.dataset.pub_date)
		helpers.saveArticle({title: e.target.dataset.title, date:e.target.dataset.pub_date, url: e.target.dataset.web_url})
			.then((result) => {
				helpers.getArticles()
	      			.then((response) => {
	      				console.log("this happened");
		        		this.props.saved(response);		            
	    			})
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
                            			data-title = {article.headline.main}
                            			data-web_url = {article.web_url}
                            			data-pub_date = {article.pub_date}
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


