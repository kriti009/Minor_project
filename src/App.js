// import './App.css';

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Index from "./Components/index";
import { Layout } from "antd";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Repairs from "./Components/Repairs";
import DamageDetails from "./Components/DamageDetails";
import { web3, getHome,getAllDamage, addHome, addInsurer, addInvestigator, addSupplier, addDamage } from "./ContractFunc";

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	async componentDidMount() {
		// await addDamage('0x46d5ab5FB9F039244ed838841B38530e399BC82a', '0xd2BEFe67c5CE6bDf236F7F6e416519a36de6457a', '0x7B757630Ab2f2Eb8Dd6F05C920a0621910Fc5327','Garden', 'sprinkler');
		const home = await getHome();
		console.log(home);
		// const damages = await getAllDamage();
		// console.log(damages);
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
