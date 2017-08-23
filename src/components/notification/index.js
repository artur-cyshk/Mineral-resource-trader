import React, { Component } from 'react';
import './notification.css';

export default class Notification extends Component {
	removeNotification = () => {
		this.props.onRemoveNotification(this.props.index);
	}
	render() {
		return (
		  	<div className={`notification ${this.props.info.ok ? 'success' : 'failed'}`}>
		  		<p>{this.props.info.message}</p>
		  		<i className="fa fa-trash-o" onClick={this.removeNotification}></i>
		  	</div>
		);
	}
};
