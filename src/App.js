// import './App.css';

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Index from "./Components/index";
import { Layout } from "antd";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Repairs from "./Components/Repairs";
import DamageDetails from "./Components/DamageDetails";
import { web3, getHome } from "./ContractFunc";

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	async componentDidMount() {
		const accounts = await web3.eth.getAccounts();
		const home = await getHome();
		console.log(home);
	}
	render() {
		return (
			<Router>
				<div>
					<Index title="DASHBOARD" selected="1">
						<Switch>
							<Route
								exact
								path="/"
								component={Dashboard}></Route>
							<Route
								exact
								path="/repairs"
								component={Repairs}></Route>
							<Route
								exact
								path="/details"
								component={DamageDetails}></Route>
						</Switch>
					</Index>
				</div>
			</Router>
		);
	}
}

export default App;
