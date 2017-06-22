// ******************************************************************************
// routes.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================

// Include the React library
//var React = require("react");
import React from "react";

// Include the react-router module
//var router = require("react-router");
import {Route, Router, hashHistory, IndexRoute} from "react-router";

// Include the Route component for displaying individual routes
//var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
//var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
//var hashHistory = router.hashHistory;


//var IndexRoute = router.IndexRoute;

import Main from "../components/main";
import Saved from "../components/saved";
import Search from "../components/search";

// *** Routes
// =============================================================

export default (
	<Router history={hashHistory}>
    	<Route path="/" component={Main} />
  	</Router>
);