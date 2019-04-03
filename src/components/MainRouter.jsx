import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Sandbox from '../pages/Sandbox';
import MainHeader from '../components/MainHeader';

const MainRouter = () => (
    <Router>
      <div>
        <MainHeader />
        <Route exact path="/" component={HomePage} />
        <Route path="/sandbox" component={Sandbox} />
      </div>
    </Router>
);

export default MainRouter;
