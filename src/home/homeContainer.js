import React from 'react';
import Home from './home';
import e from '../index'

class HomeContainer extends React.Component{
	state = {
		name:''
	}

	componentDidMount(){    	
    	e.on('name', name => {
	      this.setState({
	      	name:name.text
	      })
	    });
	}

	render(){
		return(
			<div>
				<Home name={this.state.name}/>
			</div>
		)
	};

	componentWillUnmount(){
		this.setState({
			name:''
		})
	};
}

export default HomeContainer;