/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
// TODO テスト用のjsonをとりま直書きでいいので用意する。

import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './App.css';
import Quotes from './quotes.json';

const quotes = Quotes.quotes;
const index = Math.floor(Math.random() * quotes.length);





class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        App
        <div />
        <div />
        <div />
      </div>
    );
  }
}

export default App;