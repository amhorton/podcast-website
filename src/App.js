import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './HomeSection';
import Sidebar from './Sidebar';

const tabs = {
  HOME: "HOME",
  ABOUT: "ABOUT",
  EPISODES: "EPISODES"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: "HOME" };
  }

  onTabChange(tab) {
    console.log(tab);
    this.setState({ tab });
  }

  render() {
    const isHome = this.state.tab = tabs.HOME;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my best lunch</h2>
        </div>
        <div className='body-wrapper'>
          <div className='sidebar-wrapper'>
            <Sidebar onTabChange={(tab) => this.onTabChange(tab)} />
          </div>
          <div className='section-wrapper'>
            {isHome &&
              <Home/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export { tabs };
export default App;
