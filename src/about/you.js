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
      <div>
        <a href="/angular" onClick={navigateToUrl}>
          Continuar a Angular
        </a>
        <br/>
        <a href="/home" onClick={navigateToUrl}>
          Continuar a React
        </a> 
        <br/>
        <a href="/" onClick={navigateToUrl}>
          Continuar a Home
        </a>                
      </div>
    )
}


export default Data;