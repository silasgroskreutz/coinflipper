import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  render() {
    return (
      <div>
        <img className='coin' src='https://tinyurl.com/react-coin-heads-jpg' />
        <img className='coin' src='https://tinyurl.com/react-coin-tail-jpg' />
      </div>
    );
  }
}

export default Coin;
