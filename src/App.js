import React from 'react';
import './App.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X'
    }
  }
  render() {
    return (
      <div className="game">
        <Board turn={this.state.turn}/>
      </div>
    )
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }
  }
  render() {
    return (
      <div className="board">
        <div className="firstRow">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="secondRow">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="thirdRow">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    )
  }
}

class Square extends React.Component {
  handleClick = (e) => {
    console.log(e);
  }
  render() {
    return (
      <div className="square" onClick={this.handleClick}></div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
        <Game />
      </div>
    )
  }
}

export default App;
