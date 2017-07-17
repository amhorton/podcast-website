import React, { Component } from 'react';

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  toggleExpanded() {
    this.setState({expanded: !this.state.expanded});
  }
  render() {
    const { title, description, reading } = this.props;
    const { expanded } = this.state;
    const linkText = expanded ? "Show less" : "Show more";

    return (
      <div className='episode-container'>
        <div className='episode-title'>{title}</div>
        <div><a className='episode-expand-link' onClick={() => this.toggleExpanded()}>{linkText}</a></div>
        {expanded && <div className='episode-player-test'>TEST PLAYER</div>}
        {expanded && <div className='episode-description'>{description}</div>}
        {reading && expanded && <div className='episode-reading'>{reading}</div>}
      </div>
    );
  }
}

export default Episodes;
