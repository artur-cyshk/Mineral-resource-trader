import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutCreator } from '../actionCreators';
import '../styles/header.css';


class Header extends Component {
  render() {
    return (
    	<div className="header">
          <Link to="/workspace" title="Go to main page">
            <i className={`fa fa-shopping-basket ${this.props.isLoading ? 'is_loading' : ''}`} ></i>
            Online Market
          </Link>
          <div className="auth-link-wrapper">
            <Link to="/auth/signIn" title="Sign in" hidden={this.props.currentUser.id}>
              <i className="fa fa-sign-in"></i>
            </Link>
            <Link to="/auth/signUp" title="Sign up" hidden={this.props.currentUser.id}>
              <i className="fa fa-user-plus"></i>
            </Link>
            <span hidden={!this.props.currentUser.id}>{ this.props.currentUser.name }</span> 
            <Link to="/workspace" title="Sign out" onClick={this.props.signOut} hidden={!this.props.currentUser.id}>
              <i className="fa fa-sign-out"></i>
            </Link>
          </div>
      	</div>
    );
  }
};

const mapStateToProps = (state) => ({ isLoading: state.loading.isLoading, currentUser: state.auth.currentUser });

const mapDispatchToProps = (dispatch) => ({ signOut: () => dispatch(signOutCreator()) });

export default connect(mapStateToProps, mapDispatchToProps)(Header);