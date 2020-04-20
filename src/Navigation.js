import React from 'react';
import logo from './logo.svg';
import {NavLink} from 'react-router-dom';

function Navigation(props){
	return(
		<header>
			<nav className="navbar navbar-expand navbar-light bg-white">
				<div className="container">
					<div className="navbar-brand mr-5">
						<img src={logo} width="35" height="35" alt="Logo" />
					</div>
					<div className="navbar-nav mr-auto">
						<NavLink to="/" activeClassName="active" exact={true} className="nav-item nav-link mr-5">Recipe Book</NavLink>
						<NavLink to="/add" activeClassName="active" className="nav-item nav-link mr-5">Add Recipe</NavLink>
					</div>
					<button className="btn btn-sm btn-outline-primary ml-2" type="button">Log Out</button>
				</div>
			</nav>
		</header>
	);
}

export default Navigation;
