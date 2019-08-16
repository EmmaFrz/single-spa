import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Name from './nameContainer';

const NameForm = () => (
  <Router>
    <Route component={Name}/>    
  </Router>
);


export default NameForm;