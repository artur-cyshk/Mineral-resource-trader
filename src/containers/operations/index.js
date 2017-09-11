import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Resources, Portfolio } from '../../components';

class Operations extends Component {
  render() {
    return (
    	<div>
      	<Resources/>
      	<Portfolio/>
      </div>	
    );
  }
};

const mapStateToProps = (state) => ({ resources: state.resources });
const mapDispatchToProps = (dispatch) => {
  return {
    // removeNotification: (data) => dispatch(notificationsCreator(data, false)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Operations);
