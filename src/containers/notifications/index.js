import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { notificationsCreator } from '../../actionCreators';
import { Notification } from '../../components';
import './notifications.css';

class Notifications extends Component {
	
	render() {
		return (
			<div className="notifications">
				<ReactCSSTransitionGroup
		          transitionName="notification"
		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={300}
		        >
					{ this.props.notifications.map((notification) => <Notification key={notification.guid} info={notification} onRemoveNotification={this.props.removeNotification} />) }
				</ReactCSSTransitionGroup>
			</div>
		);
	}
};

const mapStateToProps = (state) => ({ notifications: state.notifications });
const mapDispatchToProps = (dispatch) => {
  return {
    removeNotification: (data) => dispatch(notificationsCreator(data, false)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);