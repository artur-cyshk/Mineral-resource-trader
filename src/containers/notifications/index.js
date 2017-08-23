import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeNotification } from '../../actions/notifications';
import { Notification } from '../../components';
import './notifications.css';

class Notifications extends Component {
	
	render() {
		return (
			<div className="notifications">
				{ this.props.notifications.map((notification, i) => <Notification key={i} index={i} info={notification} onRemoveNotification={this.props.removeNotification} />) }
			</div>
		);
	}
};

const mapStateToProps = (state) => ({ notifications: state.notifications });
const mapDispatchToProps = (dispatch) => ({ removeNotification: (index) => dispatch(removeNotification(index)) });


export default connect(mapStateToProps, mapDispatchToProps)(Notifications);