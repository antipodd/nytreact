// ******************************************************************************
// main.js 
// handles static content
// ******************************************************************************
// *** Dependencies
// =============================================================

//
import React from "react"
import Search from "./search"
import Saved from "./saved"

import helpers from "../utils/helpers.js";

//destructure react-router
//import {Link} from "react-router"; not needed here

class Main extends React.Component{
	constructor(props) {
		super(props); // Component has its own constructor function
		/*helpers.getArticles()
	      	.then((response) => {    
		        this.state = { savedArticles: response }
		        });
		        if (this.state.savedArticles.data.length === 0) {
		        	this.setState({
		        		savedArticles: null
		        	})
		        	
		        }
		        console.log("RESULTS", response);
		        console.log("state", this.state.savedArticles);     
	    	})*/
		this.state = { savedArticles: [] };
		this.saved = this.saved.bind(this);

	}

	componentWillMount() {
    	console.log("COMPONENT MOUNTED");

	    // As the page loads, grab the articles that already exist in the database
	    helpers.getArticles()
	      	.then((response) => {    
		        this.setState({
		          	savedArticles: response.data
		        });
		        // if (this.state.savedArticles.data.length === 0) {
		        // 	this.setState({
		        // 		savedArticles: null
		        // 	})
		        	
		        // }
		        console.log("RESULTS", response);
		        console.log("state", this.state.savedArticles);     
	    	})
	}

	saved (articles) {
		console.log('savedArticles called', articles)
    	this.setState({ savedArticles: articles });
  	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="text-center"> New York Times Article Scrubber </h1>
					<p className="lead text-center"> Search for and annotate articles of interest! </p> 
				</div>
				
				<Search saved={this.saved} />
				<Saved saved={this.saved} savedArticles={this.state.savedArticles}/>

			</div>
		);
	}
}

export default Main;