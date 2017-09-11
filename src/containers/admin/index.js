import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsersCreator, clearUsersListCreator, updateUserByIdCreator } from '../../actionCreators';
import { UsersList } from '../../components';
import { usersListItemsLimit } from '../../constants/common';
import './admin.css';


class Admin extends Component {

	componentWillMount() {
		this.props.getAllUsers();
	}

	handleScroll = (ev) => {
		const { scrollHeight, offsetHeight, scrollTop } = ev.target;
		if (offsetHeight + scrollTop >= scrollHeight) {
			this.getUsers();
		}
	}

	componentWillUnmount() {
		this.props.clearUserList();
	}

	getUsers = () => {
		if(this.props.users.length % usersListItemsLimit === 0) {
			this.props.getAllUsers(this.props.users.length / usersListItemsLimit);
		}
	}

	render() {

		return (
			<div className="admin-wrapper">			
				<nav>
		    		<a>Registered users</a> {this.isShowMoreButton}
		    	</nav>
		    	<div onScroll={this.handleScroll} id="id" ref={node => this.scrolledBlock = node}>
		    		<UsersList users={this.props.users} updateUser={this.props.updateUser} />
		    	</div>
			</div>
		);
	}
};


const mapStateToProps = (state) => ({ users: state.users });
const mapDispatchToProps = (dispatch) => {
  return {
  	clearUserList: () => dispatch(clearUsersListCreator()),
    getAllUsers: (page) => dispatch(getAllUsersCreator(page)),
    updateUser: (user) => dispatch(updateUserByIdCreator(user))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Admin);