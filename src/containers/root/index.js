import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Workspace, Auth, Admin, Notifications, Header } from '../../containers';
import { getCurrentUserDispatcher } from '../../dispatchers';
import './root.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class Root extends Component {

  componentWillMount() {
    this.props.getCurrentUser();  
  }
  
  render() {
    let { isAdmin, id } = this.props.currentUser;
    let authorizedRedirect = isAdmin ? <Redirect to='/admin'/> : id ? <Redirect to='/workspace'/> : null;
    return (
        <Router location='history'>
      		<div>
      			<Header/>
            <div className="workspace-wrapper"> 
              { authorizedRedirect }
              <Switch>
                { isAdmin ? <Route path="/admin" component={Admin} /> : <Route path="/workspace" component={Workspace} /> }
                { (!isAdmin && id == null) && <Route path="/auth" component={Auth} /> }
                <Redirect from='/' to={ isAdmin ? '/admin' : '/workspace' } />
              </Switch>
              <Notifications/>
            </div>
        	</div>
        </Router>
    );
  }
};

const mapStateToProps = (state) => ({ currentUser: state.auth.currentUser });

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(getCurrentUserDispatcher())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Root);