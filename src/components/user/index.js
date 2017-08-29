import React, { Component } from 'react';
import './user.css';


export default class User extends Component {
  render() {
    return (
      	<li className="user">{this.props.info.name}</li>
    );
  }
};
