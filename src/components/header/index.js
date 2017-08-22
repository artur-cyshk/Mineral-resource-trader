import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
    	<div className="header">
	    	<i className="fa fa-shopping-basket" aria-hidden="true"></i>
	      	<div>
	      		Online Market
	      	</div>
      	</div>
    );
  }
};
