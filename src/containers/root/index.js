import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import { Header } from '../../components';
import { Workspace, Auth, Admin } from '../../containers';
import './root.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore)(reducer);


export default class Root extends Component {
  render() {
    return (
      	<Provider store={createStoreWithMiddleware}>
      		<div>
      			<Header/>
            <div className="workspace-wrapper">
              <Router location='history'>
                  <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/" component={Workspace} />
                  </Switch>
              </Router>
            </div>
        	</div>
    	</Provider>
    );
  }
};
