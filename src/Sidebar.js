import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    const { onTabChange } = this.props;
    return (
      <div>
        <div className="sidebar-link-wrapper">
          <a className="sidebar-link" onClick={() => onTabChange('HOME')}>{'HOME'}</a>
        </div>
      </div>
    )
  }
}

export default Sidebar;
