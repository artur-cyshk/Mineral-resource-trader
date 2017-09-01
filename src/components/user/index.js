import React, { Component } from 'react';
import './user.css';


export default class User extends Component {

  updateUser = () => {
    //TODO change state
    this.props.updateUser(this.props.info);
  }

  render() {
  	const { name, isAdmin, isBanned } = this.props.info;

    return (
      <li className={`user ${isBanned ? 'banned' : ''} ${isAdmin ? 'admin' : ''}`}>
      	<span title={name} className="user-name" >{name}</span>
      	<div className="user-actions">
					<button className="admin-button" onClick={this.updateUser}>
						<span>{isAdmin ? 'remove' : 'add'} root</span>
						<i className="fa fa-unlock" aria-hidden="true"></i>
					</button>
					<button className="ban-button">
						<span>{isBanned ? 'unban' : 'ban'}</span>
						<i className="fa fa-ban" aria-hidden="true"></i>
					</button>
      	</div>
      	<span className="title-block">
      		{isBanned ? 'banned' : ''} {isAdmin ? 'rooted' : ''}
      	</span>
      </li>
    );
  }
};
