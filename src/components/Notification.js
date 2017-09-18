import React, { Component } from 'react';
import { autoRemovingNotificationDelay } from '../constants/common.js';
import '../styles/notification.css';

export default class Notification extends Component {

	removeNotification = () => {
		this.props.onRemoveNotification(this.props.info.guid);
		clearTimeout(this.timeoutId);
	}

	componentDidMount = () => {
		if (this.props.info.autoclosing) {
			let guid = this.props.info.guid;
			this.timeoutId = setTimeout(
				() => this.props.onRemoveNotification(guid),
				autoRemovingNotificationDelay
			);
		}
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
