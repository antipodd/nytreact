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
	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="text-center"> New York Times Article Scrubber </h1>
					<p className="lead text-center"> Search for and annotate articles of interest! </p> 
				</div>
				
				<Search />
				<Saved />

			</div>
		);
	}
}

export default Main;