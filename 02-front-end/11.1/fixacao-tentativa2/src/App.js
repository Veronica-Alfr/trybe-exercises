import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }), () => {
      if (this.state.numeroDeCliques % 2 === 0) {
        console.log('Ficou verde');
      }
    })
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
