import React, { Component } from 'react';
import { User } from '../';
import './usersList.css';


export default class UsersList extends Component {
  render() {
    return (
    	<ul className="users">
				{ this.props.users.map((user, i) => <User key={i} updateUser={this.props.updateUser} info={user} />) }
    	</ul>
      	
    );
  }
};
