import React, { Component } from 'react';
import { Operations, Archive, RecentActivities } from '../../containers';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';
import './workspace.css';


export default class Workspace extends Component {
  render() {
    return (
      <div className="workspace">
        <div>
    			<Router location='history'>
            <div className="workspace-inner">
              <nav>
                <NavLink to="/operations" activeClassName="active">operations</NavLink>
                <NavLink to="/archive" activeClassName="active">archive</NavLink>
              </nav>
              <main>
                <Switch>
                  <Route path="/operations" component={Operations} />
                  <Route path="/archive" component={Archive} />
                  <Redirect from='/' to="/operations" />
                </Switch>
              </main>
            </div>
    	    </Router>
         </div> 
        <RecentActivities/>
      </div>
    );
  }
};
