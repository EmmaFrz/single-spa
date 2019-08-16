import React from 'react';
import e from '../index';
const handleSubmit = (event,props) => {
	event.preventDefault();
	e.emit('name', {text:event.target.name.value})
}

const NameForm = (props) => {
	return(
		<div>
			<h4>Formulario dinamico</h4>
			<h5>Ingrese nombre</h5>
			<form onSubmit={handleSubmit}>
				<label>Nombre</label>
				<input name="name"/>
				<input type="submit" class="waves-effect waves-light btn blue lighten-3"/>
			</form>
		</div>
	)
}

export default NameForm;