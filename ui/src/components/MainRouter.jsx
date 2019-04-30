import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Exercises from './exercises/Exercises.js';
import Sandbox from './sandbox/Sandbox.js';
import Tests from './tests/Tests.js';
import Lessons from './lessons/Lessons.jsx';
import MainHeader from './MainHeader.js';
import HomePage from './homepage/HomePage.jsx';
import Login from './login/Login.js';
import User from './user/User.jsx';

export default class MainRouter extends React.Component {
  componentDidMount() {
    this.props.fetchData();
    this.props.fetchTestsData();
  }

  renderRoot = () => <Redirect to='/home'/>

  renderSandbox = () => {
    const { currentTaskId } = this.props;
    if (currentTaskId === null) {
      return <Redirect to="/exercises"/>;
    }
    return <Sandbox/>;
  }

  render() {
    const { modal } = this.props;
    return (
      <Router>
        <div className='main-router'>
          {modal === 'login' && <Login />}
          <MainHeader />
          <main className='main'>
            <Route exact path='/' render={this.renderRoot}/>
            <Route path='/home' component={HomePage} />
            <Route path='/exercises' component={Exercises} />
            <Route path='/sandbox' render={this.renderSandbox}/>
            <Route path='/tests' component={Tests} />
            <Route path='/lessons' component={Lessons} />
            <Route path='/user' component={User} />
          </main>
        </div>
      </Router>
    );
  }
}
