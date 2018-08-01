import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerList from './components/PlayerList.jsx';
import OppPlayerList from './components/OppPlayerList.jsx';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fantasy Projector</h1>
        </header>
        <div className="playerTeam"><PlayerList/></div>
        <div className="oppTeam"><OppPlayerList/></div>
      </div>
    );
  }
}

export default App;
