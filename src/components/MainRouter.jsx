import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HomePage from './homepage/HomePage.js';
import Sandbox from './sandbox/Sandbox.js';
import MainHeader from './MainHeader.jsx';

export default class MainRouter extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderRoot = () => <Redirect to='/home'/>

  render() {
    return (
      <Router>
        <div className='main-router'>
          <MainHeader />
          <main className='main'>
            <Route exact path='/' render={this.renderRoot}/>
            <Route path='/home' component={HomePage} />
            <Route path='/sandbox' component={Sandbox} />
          </main>
        </div>
      </Router>
    );
  }
}
