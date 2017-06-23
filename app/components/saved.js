// ******************************************************************************
// saved.js 
// 
// ******************************************************************************
// *** Dependencies
// =============================================================

//
import React from "react";

import helpers from "../utils/helpers.js";

class Saved extends React.Component{
	constructor(props) {
		super(props); // Component has its own constructor function

		this.state = { savedArticles: null };
		this.componentDidMount = this.componentDidMount.bind(this);
		this.displaySavedArticles = this.displaySavedArticles.bind(this);
	}

	componentDidMount() {
    	console.log("COMPONENT MOUNTED");

	    // The moment the page renders on page load, we will retrieve the previous click count.
	    // We will then utilize that click count to change the value of the click state.
	    helpers.getArticles()
	      	.then((response) => {    
		        
		        this.setState({
		          	savedArticles: response
		        });
		        console.log("RESULTS", response);
		        
	    	})
	}

	displaySavedArticles() {
		return this.state.savedArticles.data.map((article, number) => {
			  				return (
			  					<div className="panel-body" key={number}>
			  						<h3><a href={article.url}>{article.title}</a></h3>
			  						<p>Date Published: {new Date(article.date).toString()}</p>
			  						<button
                            			className = "btn btn-info"
                            			data-id = {article._id}
                            			data-title = {article.title}
                            			data-web_url = {article.url}
                            			data-pub_date = {article.date}>
			                            Delete Article
		                        	</button>
			  					</div>
			  				)
				  })
	}
  
  	deleteArticle() {

  	}

	render() {
		return (
			<div className="row">
				<div className="container">
					<div className="panel panel-primary">
	                    <div className="panel-heading">
	                        <h3 className="panel-title">Saved Articles</h3>
	                    </div>
						{this.state.savedArticles ? 
								this.displaySavedArticles() : <div>No articles have been saved</div>
					  	}
					  	
					</div>
				</div>
			</div>
		);
	}
}

export default Saved;