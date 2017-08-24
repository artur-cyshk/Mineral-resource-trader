import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './header.css';


class Header extends Component {
  render() {
    return (
    	<div className="header">
	    	<i className={`fa fa-shopping-basket ${this.props.isLoading ? 'is_loading' : ''}`} ></i>
            <Router location='history'>
                <NavLink to="/operations" title="Go to main page">Online Market</NavLink>
            </Router>
      	</div>
    );
  }
};

const mapStateToProps = (state) => ({ isLoading: state.loading.isLoading });

export default connect(mapStateToProps)(Header);