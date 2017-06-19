// ******************************************************************************
// app.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
// Import react and react-dom
import React from "react";
import ReactDOM from "react-dom"
// Import routes
import routes from ".config/routes"

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));
