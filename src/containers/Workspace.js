import React, { Component } from 'react';
import { Operations, Archive, RecentActivities } from '../containers';
import {
  Route,
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';
import '../styles/workspace.css';


export default class Workspace extends Component {
  render() {
    return (
      <div className="workspace">
        <div>
            <div className="workspace-inner">
              <nav>
                <NavLink to="/workspace/operations" activeClassName="active">operations</NavLink>
                <NavLink to="/workspace/archive" activeClassName="active">archive</NavLink>
              </nav>
              <main>
                <Switch>
                  <Route path="/workspace/operations" component={Operations} />
                  <Route path="/workspace/archive" component={Archive} />
                  <Redirect from='/workspace' to="/workspace/operations" />
                </Switch>
              </main>
            </div>
         </div> 
        <RecentActivities/>
      </div>
    );
  }
};
