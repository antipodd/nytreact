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
		// this.componentDidMount = this.componentDidMount.bind(this);
		this.displaySavedArticles = this.displaySavedArticles.bind(this);
		this.deleteArticle = this.deleteArticle.bind(this);
		/*this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);*/
	}

	/*componentDidMount() {
		this.displaySavedArticles()
	}*/
	componentDidMount() {
    	console.log("COMPONENT MOUNTED");

	    // As the page loads, grab the articles that already exist in the database
	    // helpers.getArticles()
	    //   	.then((response) => {    
		   //      this.setState({
		   //        	savedArticles: response
		   //      });
		   //      this.props.saved(response);
		   //      if (this.state.savedArticles.data.length === 0) {
		   //      	this.setState({
		   //      		savedArticles: null
		   //      	})
		        	
		        	
		   //      }
		   //      console.log("RESULTS", response);
		   //      console.log("state", this.state.savedArticles);     
	    // 	})
	}

	displaySavedArticles() {
		return this.props.savedArticles.map((article, number) => {
			  				return (
			  					<div className="panel-body" key={number}>
			  						<h3><a href={article.url}>{article.title}</a></h3>
			  						<p>Date Published: {new Date(article.date).toString()}</p>
			  						<button
                            			className = "btn btn-info"
                            			data-id = {article._id}
                            			data-title = {article.title}
                            			data-web_url = {article.url}
                            			data-pub_date = {article.date}
                            			onClick = {this.deleteArticle}>
			                            Delete Article
		                        	</button>
			  					</div>
			  				)
				  })
	}
  
  	deleteArticle(e) {
  		console.log(e.target.dataset.id)
  		helpers.deleteArticle({id: e.target.dataset.id})
			.then((result) => {
				console.log("deleted");
				console.log(result);
				// this should work but I get response of null?
				helpers.getArticles()
	      			.then((response) => {
	      				console.log("retrieving articles")
	      				console.log(response)
	      				//const savedArticles = response;    
		        		this.props.saved(response.data)
		        		/*this.setState({savedArticles: response})*/
		        		
		            
	    			})
			})
  	}

  	/*componentWillReceiveProps(prevState) {
  		if (this.props.saved) {
  			if(prevState.savedArticles !== this.props.saved) {
  				this.setState({savedArticles: this.props.saved})
  			}
  		}
  	}*/

	render() {
		return (
			<div className="row">
				<div className="container">
					<div className="panel panel-primary">
	                    <div className="panel-heading">
	                        <h3 className="panel-title">Saved Articles</h3>
	                    </div>
						{this.props.savedArticles.length ? 
								this.displaySavedArticles() : <div className="panel-body">No articles have been saved</div>
					  	}
					  	
					</div>
				</div>
			</div>
		);
	}
}

export default Saved;