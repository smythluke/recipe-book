import React from 'react';
import './App.scss';
import Navigation from './Navigation';
import RecipeBook from './RecipeBook';
import AddRecipe from './AddRecipe';

function App() {
	return (
		<React.Fragment>
			<Navigation />
			<RecipeBook />
			<AddRecipe />
		</React.Fragment>
	);
}

export default App;
