import React from 'react';

function RecipeCard(props){
	return(
		<div className="col mb-4">
			<div className="card h-100">
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">{props.rating}</small>
				</div>
			</div>
		</div>
	);
}

function RecipeBook(props){
	return(
		<section className="container">
			<div className="row row-cols-1 row-cols-md-3">
				<RecipeCard title="Best Chocolate Chip Cookies" description="Crisp edges, chewy middles." rating="5/5" />
				<RecipeCard title="Baked Teriyaki Chicken" description="A much requested chicken recipe! Easy to double for a large group. Delicious!" rating="5/5" />
				<RecipeCard title="Turkey Bolognese Recipe" description="This is a lighter Bolognese with all the flavor made with lean ground turkey. Mix with freshly boiled pasta." rating="3/5" />
				<RecipeCard title="Kale and Banana Smoothie" description="Nutrient-rich kale is hidden in this delicious banana smoothie. Perfect for those of us who have a hard time getting our daily dose of veggies!" rating="4/5" />
			</div>
		</section>
	);
}

export default RecipeBook;
