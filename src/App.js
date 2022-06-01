/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
// TODO テスト用のjsonをとりま直書きでいいので用意する。

import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './App.css';
import Quotes from './quotes.json';
const quotes = Quotes.quotes;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
  }

  componentDidMount() {
    console.log('test for componentDidMount');
    let index = Math.floor(Math.random() * quotes.length);
    this.setState({ quote: quotes[index].quote });
    this.setState({ author: quotes[index].author });
  }

  TestOnClick() {
    console.log('test for onclick method');
  }

  render() {
    const twitterUrl = 'http://twitter.com/intent/tweet';
    const hashtags = ['quote', 'freeCodeCamp'];
    const text = this.state.quote;

    return (
      <div className='' id='quote-box'>
        <div className='' id='text'>
          {this.state.quote}
        </div>
        <div className='' id='author'>
          {this.state.author}
        </div>
        <button className='' id='new-quote' onClick={this.TestOnClick}>
          new-quote
        </button>
        <p>
          <a
            href={`${twitterUrl}?text=${this.state.quote}&hashtags=${hashtags}`}
            target='_blank'
            rel='noopener noreferrer'
            id='tweet-quote'
          >
            <Icon icon='fa-brands:twitter-square' color='#1DA1F2' /> tweet
          </a>
        </p>
      </div>
    );
  }
}

export default App;