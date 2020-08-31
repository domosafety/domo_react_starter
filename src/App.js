import React from "react";
import logo from "./domo-icon.svg";
import "./App.css";
import { connect } from "react-redux";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to it.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

const mapStateToProps = () => {
	return {};
};

export default connect(mapStateToProps)(App);
