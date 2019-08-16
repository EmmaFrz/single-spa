import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './homeContainer';
const AnimationExample = () => (
  <Router>
    <Route exact path='/home' component={Home}/>    
  </Router>
);


export default AnimationExample;