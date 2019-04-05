import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HomePage from './homepage/HomePage.jsx';
import Sandbox from './sandbox/Sandbox.js';
import MainHeader from './MainHeader.jsx';

export default class MainRouter extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderRoot = () => <Redirect to='/home'/>

  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <MainHeader />
          <Route exact path='/' render={this.renderRoot}/>
          <Route path='/home' component={HomePage} />
          <Route path='/sandbox' component={Sandbox} />
        </div>
      </Router>
    );
  }
}
