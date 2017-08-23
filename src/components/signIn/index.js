import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '213', password: '12'};
	}

	onValueChange = (ev) => {
		this.setState({
			[ev.target.name]: ev.target.value
		});
	}

	onFormSubmit = (ev) => {
		ev.preventDefault();
		this.props.onSubmit(this.state);
	}

	render() {
		let { error } = this.props.data;
		return (
			<div className="auth-wrapper">
		      	<form onSubmit={this.onFormSubmit} className="auth">
		      		<div className="form-header"> Sign In </div>
		      		<div className="form-content">
			      		<div className="username"> 
			      			<input type="text" onChange={this.onValueChange} value={this.state.username} name="username" placeholder="Username" />
			      			<i className="fa fa-user" aria-hidden="true"></i>
			      		</div>
			      		<div className="password"> 
			      			<input type="password" onChange={this.onValueChange} value={this.state.password} name="password" placeholder="Password" />
			      			<i className="fa fa-lock" aria-hidden="true"></i>
			      		</div>
			      	</div>	
			      	<div className="form-footer"> 
						<button className="auth-button" disabled={!this.state.password || !this.state.username}> sign in </button>
						<Link to="/auth/signUp"><i className="fa fa-user-plus auth-icon" aria-hidden="true" title="Sign up"></i></Link>
			      	</div>
		      	</form>
		  	</div>
		);
    }
};
