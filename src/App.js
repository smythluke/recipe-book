import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';
import Navigation from './Navigation';
import RecipeBook from './RecipeBook';
import AddRecipe from './AddRecipe';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/" exact>
					<RecipeBook />
				</Route>
				<Route path="/add">
					<AddRecipe />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
