// ******************************************************************************
// search.js 
// 
// ******************************************************************************
// *** Dependencies
// =============================================================

//
import React from "react";

import helpers from "../utils/helpers"


class Search extends React.Component {
	constructor(props) {
		super(props); // Component has its own constructor function

		this.state = { term: '', startDate: '', endDate: '', results: {} };
		this.onChange = this.onChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  	}

	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state.term)
		console.log(this.state.startDate)
		console.log(this.state.endDate)
		helpers.searchQuery(this.state.term, this.state.startDate, this.state.endDate)
			.then((result) => {
				console.log(result)
			})
	}

	render() {
		return (
			<form>
				<div className="form-group">
				<label htmlFor="search term">Search Terms</label>
					<input 
						value={this.state.term} // input is now a controlled component, value set by state
						name="term"
						onChange={this.onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="start">Start Year (optional)</label>
					<input 
						value={this.state.startDate} // input is now a controlled component, value set by state
						name="startDate"
						onChange={this.onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="start">End Year (optional)</label>
					<input 
						value={this.state.endDate} // input is now a controlled component, value set by state
						name="endDate"
						onChange={this.onChange} />
				</div>
				<button type="search" className="btn btn-default" onClick={this.handleSubmit}>Search</button>
  				<button type="reset" className="btn btn-default">Clear Results</button>
  			</form>

  			/*{this.props.children}*/
		);
	}

	
}

{/*class Search extends React.Component{
	render() {
		return (
			<div className="main-container">
				<div className="jumbotron">
					<h1 className="text-center"> Search goes here </h1>
					<p className="lead text-center"> Search for and annotate articles of interest! </p> 
				</div>
				<div className="container">

					{this.props.children}
				</div>
			</div>
		);
	}
}*/}

export default Search;