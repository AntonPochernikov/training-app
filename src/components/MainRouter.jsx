import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HomePage from './homepage/HomePage.jsx';
import Sandbox from './sandbox/Sandbox.js';
import MainHeader from './MainHeader.jsx';

const renderRoot = () => <Redirect to='/home'/>;
const MainRouter = () => (
  <Router>
    <div>
      <MainHeader />
      <Route exact path='/' render={renderRoot}/>
      <Route path='/home' component={HomePage} />
      <Route path='/sandbox' component={Sandbox} />
    </div>
  </Router>
);

export default MainRouter;
