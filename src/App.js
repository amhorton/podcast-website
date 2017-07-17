import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './HomeSection';
import Episodes from './EpisodesSection';
import Sidebar from './Sidebar';
import SidebarRight from './SidebarRight';

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
    this.setState({ tab });
  }

  render() {
    const isHome = this.state.tab === tabs.HOME;
    const isEpisodes = this.state.tab === tabs.EPISODES;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>NEW WIZARDS SCABBERS DEFENSE FORCE</h2>
        </div>

        <div className='body-wrapper'>
          <div className='sidebar-wrapper'>
            <Sidebar onTabChange={(tab) => this.onTabChange(tab)} />
            </div>
          <div className='section-wrapper'>
            {isHome &&
              <Home/>
            }
            {isEpisodes &&
              <Episodes/>
            }
          </div>
          <div className='sidebar-wrapper-right'>
            <SidebarRight />
          </div>
        </div>
      </div>
    );
  }
}

export { tabs };
export default App;
