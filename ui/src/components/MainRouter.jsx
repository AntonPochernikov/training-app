import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Exercises from './exercises/Exercises.js';
import Sandbox from './sandbox/Sandbox.js';
import Tests from './tests/Tests.jsx';
import Lessons from './lessons/Lessons.jsx';
import MainHeader from './MainHeader.jsx';
import HomePage from './homepage/Homepage.jsx';

export default class MainRouter extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderRoot = () => <Redirect to='/home'/>

  renderSandbox = () => {
    const { currentTask } = this.props;
    if (currentTask === null) {
      return <Redirect to="/exercises"/>;
    }
    return <Sandbox/>;
  }

  render() {
    return (
      <Router>
        <div className='main-router'>
          <MainHeader />
          <main className='main'>
            <Route exact path='/' render={this.renderRoot}/>
            <Route path='/home' component={HomePage} />
            <Route path='/exercises' component={Exercises} />
            <Route path='/sandbox' render={this.renderSandbox}/>
            <Route path='/tests' component={Tests} />
            <Route path='/lessons' component={Lessons} />
          </main>
        </div>
      </Router>
    );
  }
}
