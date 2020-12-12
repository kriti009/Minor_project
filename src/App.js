// import './App.css';

import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Index from "./Components/index";
import { Layout} from "antd";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Repairs from './Components/Repairs';


function App() {
  return (
    <Router>
      <div>
        <Index title='DASHBOARD' selected='1'>
          <Switch> 
            <Route exact path='/' component={Dashboard}></Route> 
            <Route exact path='/repairs' component={Repairs}></Route> 
          </Switch> 
        </Index >
      </div>
    </Router>

  );
}

export default App;
