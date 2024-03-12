import React from 'react';
import ReactDOM from 'react-dom';
import "jquery";
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import NavBar from "./App"; // export class and "./" current/same folder for source file
import "./index.css";
var element = <button class = "btn btn-danger">HelloWorld</button>
ReactDOM.render(<NavBar/>, document.getElementById("root"));

//console.log(element);
