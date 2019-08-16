import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './homeContainer';
const HomeContainer = () => (
  <Router>
    <Route exact path='/home' component={Home}/>    
  </Router>
);


export default HomeContainer;