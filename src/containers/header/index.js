import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';


class Header extends Component {
  render() {
    return (
    	<div className="header">
	    	<i className={`fa fa-shopping-basket ${this.props.isLoading ? 'is_loading' : ''}`} ></i>
	      	<div>
	      		Online Market
	      	</div>
      	</div>
    );
  }
};

const mapStateToProps = (state) => ({ isLoading: state.loading.isLoading });

export default connect(mapStateToProps)(Header);