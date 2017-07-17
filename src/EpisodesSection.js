import React, { Component } from 'react';
import Episode from './Episode';

const testEpisodes = [
  {
    title: "Episode 0: Begining of the End",
    description: "Josh pays the blood price. Aaron sells his soul to a being that buys souls."
  },
  {
    title: "Episode 1: The Lord of Light Reveals Himself",
    description: "Josh falls under the sway of a pure rodent with a lust for blood. Aaron confuses himself and others.",
    reading: "Sorceror's Stone, chapters 1 - 7."
  },
  {
    title: "Episode 2: The Blood Price",
    description: "Josh pays the blood price. Aaron pays the blood price.",
    reading: "Sorceror's Stone, chapters 7-18"
  }
];

class EpisodesSection extends Component {
  render() {
    const episodes = testEpisodes;
    const episodeComponents = episodes.map(({description, title, reading}, index) => {
      return <Episode key={index} {...{description, title, reading}} />
    });
    return (
      <div className="section section-episodes">
        {episodeComponents}
      </div>
    );
  }
}

export default EpisodesSection;
