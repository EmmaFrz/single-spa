import React from "react";
import {navigateToUrl} from 'single-spa'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import e from '../index'

const handleSubmit = (event) => {
	event.preventDefault();
  e.emit('name',{text:event.target.name.value})
}

const Data = (props) => {
    return(
      <Router>
        <Link to="/angular" onClick={navigateToUrl}>
          Continuar a Angular
        </Link>
        <br/>
        <Link to="/home" onClick={navigateToUrl}>
          Continuar a React
        </Link> 
        <br/>
        <Link to="/" onClick={navigateToUrl}>
          Continuar a Home
        </Link>                
      </Router>
    )
}


export default Data;