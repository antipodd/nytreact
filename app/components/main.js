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

//destructure react-router
//import {Link} from "react-router"; not needed here

class Main extends React.Component{
	constructor(props) {
		super(props); // Component has its own constructor function

		this.state = { savedArticles: null };
		this.saved = this.saved.bind(this);
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