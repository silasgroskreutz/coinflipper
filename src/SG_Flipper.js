import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
  constructor(props) {
    super(props);
    this.state = { flips: 5, heads: 3, tails: 2 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() = {
      //need a callback function to add +1 to flips and +1 to result
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <Coin />
        <button onClick={this.handleClick}>Flip Me</button>
        <h4>
          Out of {this.state.flips} flips, there have been {this.state.heads}{' '}
          heads and {this.state.tails} tails.
        </h4>
      </div>
    );
  }
}

export default Flipper;
