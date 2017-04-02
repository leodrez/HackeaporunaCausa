import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import App from './pages/App';
import Appointments from './pages/Appointments';
import AppointmentDetails from './pages/AppointmentDetails';
import Institutions from './pages/Institutions';
import Profile from './pages/Profile';
import Test from './pages/Test';

/**
 * Has access to the redux store. Useful for validation purposes
 * @param store
 */
export default (store) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/test" component={Test}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/institutions" component={Institutions}/>
        <Route path="/appointments" component={Appointments}/>
        <Route path="/appointment-details/:id" component={AppointmentDetails}/>
      </Route>
    </Router>
  );
}
