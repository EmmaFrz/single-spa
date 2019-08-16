import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Data from './data';
import You from './you';
const AnimationExample = () => (
  <Router>
    <Route component={You}/>    
  </Router>
);


export default AnimationExample;