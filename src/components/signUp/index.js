import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Validation from 'react-validation';
import '../../configs/validationRules';


export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', email: '', password: '', passwordConfirm: ''};
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
		// let returnToSignIn = this.props.data.isSignUpDone ? <Redirect from='/auth/signUp' to='/auth/signIn'/> : null;
		return (
			<div className="auth-wrapper">
				<Validation.components.Form onSubmit={this.onFormSubmit} className="auth" >
		      		<div className="form-header"> Sign Up </div>
		      		<div className="form-content">
			      		<div className="email"> 
			      			<Validation.components.Input
			      				type="email" 
			      				onChange={this.onValueChange} 
			      				value={this.state.email} 
			      				name="email" 
			      				placeholder="Email" 
			      				errorClassName="is-invalid-input"
			      				validations={['required', 'email']}
			      			/>
			      			<i className="fa fa-envelope"></i>
			      		</div>
			      		<div className="username"> 
			      			<Validation.components.Input 
			      				type="username" 
			      				onChange={this.onValueChange} 
			      				value={this.state.username} 
			      				name="username" 
			      				placeholder="Username" 
			      				errorClassName="is-invalid-input"
			      				validations={['required', 'lengthMoreThenThree']}
			      			/>
			      			<i className="fa fa-user"></i>
			      		</div>
			      		<div className="password"> 
			      			<Validation.components.Input
			      				type='password' 
			      				onChange={this.onValueChange} 
			      				value={this.state.password} 
			      				placeholder="Password" 
			      				name='password' 
			      				errorClassName="is-invalid-input"
			      				validations={['required', 'lengthMoreThenSeven', 'password']}
			      			/>
			      			<i className="fa fa-lock"></i>
			      		</div>
			      		<div className="password"> 
			      			<Validation.components.Input
			      				type='password'
			      				onChange={this.onValueChange}
			      				value={this.state.passwordConfirm}
			      				placeholder="Password to confirm"
			      				name='passwordConfirm'
			      				errorClassName="is-invalid-input"
			      				validations={['required', 'lengthMoreThenSeven', 'password']}
			      			/>
			      			<i className="fa fa-lock"></i>
			      		</div>
			      	</div>	
			      	<div className="form-footer"> 
			      		<Validation.components.Button className="auth-button">Sign up</Validation.components.Button>
						<Link to="/auth/signIn">
							<i className="fa fa-undo auth-icon" aria-hidden="true" title="Sign In"></i>
						</Link>	
			      	</div>
		      	</Validation.components.Form>
		  	</div>
		);
    }
};
