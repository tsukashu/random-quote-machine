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
    this.state = {
      quote: quotes[index].quote,
      author: quotes[index].author,
    };
  }

  GetRandomQuote = () => {
    // console.log('this is:', this);
    const index = Math.floor(Math.random() * quotes.length);
    this.setState((state) => ({
      quote: quotes[index].quote,
      author: quotes[index].author,
    }));
  };

  render() {
    const twitterUrl = 'http://twitter.com/intent/tweet';
    const hashtags = ['quote', 'freeCodeCamp'];

    return (
      <div id='quote-box'>
        <div className='quote'>
          <div id='text'>{this.state.quote}</div>
          <div id='author'>{this.state.author}</div>
        </div>
        <div className='btn'>
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
          <button id='new-quote' onClick={this.GetRandomQuote}>
            new-quote
          </button>
        </div>
      </div>
    );
  }
}

export default App;