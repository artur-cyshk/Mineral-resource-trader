import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInDispatcher, signUpDispatcher } from '../../dispatchers';
import { SignIn, SignUp } from '../../components';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './auth.css';


class Auth extends Component {

	render() {
        return (
          <Switch>
              <Route path="/auth/signIn" render={ () => <SignIn onSubmit={this.props.signIn} data={this.props.data}/> } />
              <Route path="/auth/signUp" render={ () => <SignUp onSubmit={this.props.signUp} data={this.props.data}/> } />
              <Redirect from='/auth' to="/auth/signIn" />
          </Switch>
        );
	}
};



const mapStateToProps = (state) => ({ data: state.auth });
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUpDispatcher(user)),
    signIn: (user) => dispatch(signInDispatcher(user)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);