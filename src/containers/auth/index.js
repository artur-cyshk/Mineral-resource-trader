import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';

import { SignIn, SignUp } from '../../components';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './auth.css';


class Auth extends Component {

	render() {
        const { signIn, signUp } = this.props.authActions;
        return (
        	<Router location='history'>
                    <Switch>
                        <Route path="/auth/signIn" render={ () => <SignIn onSubmit={signIn} data={this.props.data}/> } />
                        <Route path="/auth/signUp" render={ () => <SignUp onSubmit={signUp} data={this.props.data}/> } />
                        <Redirect from='/auth' to="/auth/signIn" />
                    </Switch>
                </Router>
        );
	}
};

const mapStateToProps = (state) => ({ data: state.auth });
const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Auth);