import React from 'react';
import './App.scss';
import Navigation from './Navigation';
import RecipeBook from './RecipeBook';

function App() {
	return (
		<React.Fragment>
			<Navigation />
			<RecipeBook />
		</React.Fragment>
	);
}

export default App;
