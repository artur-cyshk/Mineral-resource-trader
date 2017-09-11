import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Workspace, Auth, Admin, Notifications, Header } from '../../containers';
import { getCurrentUserCreator } from '../../actionCreators';
import './root.css';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import history from '../../configs/history';

class Root extends Component {

  componentWillMount() {
    this.props.getCurrentUser();  
  }

  render() {
    let { isAdmin, id } = this.props.currentUser;
    let authorizedRedirect = isAdmin ? <Redirect to='/admin'/> : id ? <Redirect to='/workspace'/> : null;
    return (
        <Router history={history}>
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
    getCurrentUser: () => dispatch(getCurrentUserCreator())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Root);