import React, { Component } from 'react';
import PlayerListItem from './PlayerListItem.jsx';

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: ['Lebron', 'Lonzo', 'Kuzma', 'Ingram', 'McGee']
    };
  }

  render() {
    return (
      <div>
        <h2>Player List</h2>
        <ul>
          {this.state.team.map((player, index) => (
            <PlayerListItem key={index} index={index} player={player} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PlayerList;
