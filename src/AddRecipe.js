import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createRecipe } from './graphql/mutations';
import { v4 as uuidv4 } from 'uuid';

class AddRecipe extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			newTitle: "",
			newDescription: "",
			newRating: "1",
			newLink: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		let target = event.target;
		let name = target.name;
		let value = target.value;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(){
		const recipeDetails = {
			id: uuidv4(),
			title: this.state.newTitle,
			description: this.state.newDescription,
			rating: this.state.newRating,
			link: this.state.newLink
		}
		API.graphql(graphqlOperation(createRecipe, {input: recipeDetails})).then(event => {
			this.setState({
				newTitle: "",
				newDescription: "",
				newRating: "1",
				newLink:""
			});
		}).catch(error => {
			console.log(error);
		});
	}

	render(){
		return (
			<div className="container">
				<form>
					<div className="form-group">
						<label htmlFor="newTitle">Recipe Title</label>
						<input type="text" className="form-control" id="newTitle" name="newTitle" autoComplete="off" value={this.state.newTitle} onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label htmlFor="newDescription">Recipe Description</label>
						<input type="text" className="form-control" id="newDescription" name="newDescription" autoComplete="off" value={this.state.newDescription} onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label htmlFor="newRating">Recipe Rating</label>
						<select className="form-control" id="newRating" name="newRating" value={this.state.newRating} onChange={this.handleChange} >
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="newlink">Recipe Link</label>
						<input type="text" className="form-control" id="newLink" name="newLink" autoComplete="off" value={this.state.newLink} onChange={this.handleChange} />
					</div>
					<button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Add Recipe</button>
				</form>
			</div>
		);
	}
}

export default AddRecipe;
