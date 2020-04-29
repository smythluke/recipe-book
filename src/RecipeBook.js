import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listRecipes } from './graphql/queries';

function RecipeCard(props){
	return(
		<div className="col mb-4">
			<a href={props.link} target="_blank" rel="noopener noreferrer">
				<div className="card h-100">
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">{props.description}</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">{props.rating}</small>
					</div>
				</div>
			</a>
		</div>
	);
}

class RecipeBook extends React.Component {
	constructor(props){
		super(props);
		this.state={
			order: "alphabetical",
			recipes: []
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		API.graphql(graphqlOperation(listRecipes)).then(res => {
			this.setState({
				recipes: res.data.listRecipes.items
			});
		}).catch(error => {
			console.log(error);
		});
	}

	handleClick(){
		this.setState(state => ({
			order: state.order === "alphabetical" ? "rating" : "alphabetical"
		}));
	}

	sortAlpha(a, b){
		if (a.title[0] < b.title[0]){
			return -1;
		}
		if (a.title[0] > b.title[0]){
			return 1;
		}
		return 0;
	}

	sortRating(a, b){
		if (a.rating > b.rating){
			return -1;
		}
		if (a.rating < b.rating){
			return 1;
		}
		return 0;
	}

	render(){
		return(
			<section className="container">
				<div className="d-flex justify-content-between align-items-center my-3">
					<span>Current order: {this.state.order}</span>
					<button className="btn btn-primary ml-3" onClick={this.handleClick}>Change Order</button>
				</div>
				<div className="row row-cols-1 row-cols-md-3">
					{this.state.order === "alphabetical" ? 
						[].concat(this.state.recipes).sort(this.sortAlpha).map((recipe, i) => (
							<RecipeCard key={i} title={recipe.title} description={recipe.description} rating={recipe.rating+"/5"} link={recipe.link} />
						))
					:
						[].concat(this.state.recipes).sort(this.sortRating).map((recipe, i) => (
							<RecipeCard key={i} title={recipe.title} description={recipe.description} rating={recipe.rating+"/5"} link={recipe.link} />
						))
					}
				</div>
			</section>
		);
	}
}

export default RecipeBook;
