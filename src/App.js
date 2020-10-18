import React from 'react';
import './App.css';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Board />
      </div>
    )
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      turn: 'X'
    }
  }
  handleClick = (i) => {
    const board = this.state.board.slice();
    if(board[i] !== null) {
      return;
    }
    if(this.state.turn === 'X') {
      board[i] = 'X';
      this.setState({
        board: board,
        turn: 'O'
      });
    } else {
      board[i] = 'O';
      this.setState({
        board: board,
        turn: 'X'
      });
    }
  }
  render() {
    return (
      <div className="board">
        <div className="firstRow">
          <Square value={this.state.board[1]} onClick={() => this.handleClick(1)}/>
          <Square value={this.state.board[2]} onClick={() => this.handleClick(2)}/>
          <Square value={this.state.board[3]} onClick={() => this.handleClick(3)}/>
        </div>
        <div className="secondRow">
          <Square value={this.state.board[4]} onClick={() => this.handleClick(4)}/>
          <Square value={this.state.board[5]} onClick={() => this.handleClick(5)}/>
          <Square value={this.state.board[6]} onClick={() => this.handleClick(6)}/>
        </div>
        <div className="thirdRow">
          <Square value={this.state.board[7]} onClick={() => this.handleClick(7)}/>
          <Square value={this.state.board[8]} onClick={() => this.handleClick(8)}/>
          <Square value={this.state.board[9]} onClick={() => this.handleClick(9)}/>
        </div>
      </div>
    )
  }
}

class Square extends React.Component {
  render() {
    return (
      <div className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </div>
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
