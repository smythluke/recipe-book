import React from 'react';

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
			order: "alphabetical"
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(state => ({
			order: state.order === "alphabetical" ? "rating" : "alphabetical"
		}));
	}

	render(){
		let recipes = [
			{
				title: "Chocolate Chip Cookies",
				description: "Crisp edges, chewy middles.",
				rating: 4,
				link: "https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/"
			},
			{
				title: "Baked Teriyaki Chicken",
				description: "A much requested chicken recipe! Easy to double for a large group. Delicious!",
				rating: 4,
				link: "https://www.allrecipes.com/recipe/9023/baked-teriyaki-chicken/"
			},
			{
				title: "Turkey Bolognese Recipe",
				description: "This is a lighter Bolognese with all the flavor made with lean ground turkey. Mix with freshly boiled pasta.",
				rating: 2,
				link: "https://www.allrecipes.com/recipe/261949/turkey-bolognese-recipe/"
			},
			{
				title: "Kale and Banana Smoothie",
				description: "Nutrient-rich kale is hidden in this delicious banana smoothie. Perfect for those of us who have a hard time getting our daily dose of veggies!",
				rating: 1,
				link: "https://www.allrecipes.com/recipe/173730/kale-and-banana-smoothie/"
			},
			{
				title: "Pancakes",
				description: "Tall and fluffy. These pancakes are just right. Topped with strawberries and whipped cream, they are impossible to resist.",
				rating: 5,
				link: "https://www.allrecipes.com/recipe/162760/fluffy-pancakes/"
			}
		];

		if (this.state.order === "alphabetical"){
			recipes.sort(function(a, b){
				if (a.title[0] < b.title[0]){
					return -1;
				}
		
				if (a.title[0] > b.title[0]){
					return 1;
				}
		
				return 0;
			});
		}

		if (this.state.order === "rating"){
			recipes.sort(function(a, b){
				if (a.rating > b.rating){
					return -1;
				}
		
				if (a.rating < b.rating){
					return 1;
				}
		
				return 0;
			});
		}

		return(
			<section className="container">
				<div className="d-flex justify-content-between align-items-center my-3">
					<span>Current order: {this.state.order}</span>
					<button className="btn btn-primary ml-3" onClick={this.handleClick}>Change Order</button>
				</div>
				<div className="row row-cols-1 row-cols-md-3">
					{recipes.map((recipe, i) => (
						<RecipeCard key={i} title={recipe.title} description={recipe.description} rating={recipe.rating+"/5"} link={recipe.link} />
					))}
				</div>
			</section>
		);
	}
}

export default RecipeBook;
