// ******************************************************************************
// search.js 
// 
// ******************************************************************************
// *** Dependencies
// =============================================================

//
import React from "react";

import helpers from "../utils/helpers.js";

import Saved from "./saved.js";

import Results from "./results.js";


class Search extends React.Component {
	constructor(props) {
		super(props); // Component has its own constructor function

		this.state = { term: '', startDate: '', endDate: '', results: null };
		this.onChange = this.onChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);
  		this.handleReset = this.handleReset.bind(this);
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
				//console.log(result);
				this.setState({results: result});
				//let resultObject = {this.state.result}
			})
	}

	handleReset() {
		this.setState({results: {}});
		this.forceUpdate()
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label htmlFor="search term">Search Terms:&nbsp;</label>
								<input 
									className="form-control"
									value={this.state.term} // input is now a controlled component, value set by state
									name="term"
									onChange={this.onChange}
									required />
							</div>
							<div className="form-group">
								<label htmlFor="start">Start Year (required):&nbsp;</label>
								<input 
									className="form-control"
									value={this.state.startDate} // input is now a controlled component, value set by state
									name="startDate"
									onChange={this.onChange}
									required />
							</div>
							<div className="form-group">
								<label htmlFor="start">End Year (required):&nbsp;</label>
								<input 
									className="form-control"
									value={this.state.endDate} // input is now a controlled component, value set by state
									name="endDate"
									onChange={this.onChange}
									required />
							</div>
							<button 
								type="submit"
								className="btn btn-success btn-group-lg">
								Search
							</button>
							&nbsp;
			  				<button 
			  					type="reset" 
			  					className="btn btn-danger btn-group-lg"
			  					onClick={this.handleReset}>
			  					Clear Results
			  				</button>
			  			</form>
			  		</div>
			  	</div>
			  	<div className="row">
			  		&nbsp;
			  	</div>

			  	<div className="row">
			  		<div className="col-md-12">
			  			{this.state.results ? <Results search={this.state.results} /> : <div></div>}
			  		</div>
			  	</div>
			</div>
		  		
	  		
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