import React from 'react';
import logo from './logo.svg';

function Navigation(props){
	return(
		<header>
			<nav className="navbar navbar-expand navbar-light bg-white">
				<div className="container">
					<div className="navbar-brand mr-5">
						<img src={logo} width="35" height="35" alt="Logo" />
					</div>
					<div className="navbar-nav mr-auto">
						<a href="/" className="nav-item nav-link mr-5 text-primary">Recipe Book</a>
						<a href="/add" className="nav-item nav-link mr-5 text-primary">Add Recipe</a>
					</div>
					<button className="btn btn-sm btn-outline-primary ml-2" type="button">Log Out</button>
				</div>
			</nav>
		</header>
	);
}

export default Navigation;
