import React, { Component } from 'react';

class SidebarRight extends Component {
  render() {
    return (
      <div>
        <div className="sidebar-link-wrapper">
          <a className="sidebar-link" href="google.com">{'External Link 1'}</a>
        </div>
        <div className="sidebar-link-wrapper">
          <a className="sidebar-link" href="google.com">{'External Link 2'}</a>
        </div>
      </div>
    )
  }
}

export default SidebarRight;
