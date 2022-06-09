/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
// TODO テスト用のjsonをとりま直書きでいいので用意する。

import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './App.css';
import Quotes from './quotes.json';

const GetRandomQuote = () => {
  const quotes = Quotes.quotes;
  const index = Math.floor(Math.random() * quotes.length);
  return {
    quote: quotes[index].quote,
    author: quotes[index].author,
  };
};

const Tweet = (props) => {
  const text = props.text;
  const twitterUrl = 'http://twitter.com/intent/tweet';
  const hashtags = ['quote', 'freeCodeCamp'];

  return (
    <a
      href={`${twitterUrl}?text=${text}&hashtags=${hashtags}`}
      target='_blank'
      rel='noopener noreferrer'
      id='tweet-quote'
    >
      <Icon icon='fa-brands:twitter-square' color='#1DA1F2' /> TWEET
    </a>
  );
};

class App extends Component {
  // constructor(props) { //maybe nouse constructor??
  //   super(props);
  // }
  state = GetRandomQuote();

  handleClick = () => {
    // renew state with function.
    // console.log('this is ;', this); //for debug on "this"
    this.setState((state) => GetRandomQuote());
  };

  render() {
    return (
      <div id='quote-box'>
        <h2 id='text'>{this.state.quote}</h2>
        <h2 id='author'>{this.state.author}</h2>
        <Tweet text={this.state.quote} />
        <button id='new-quote' onClick={this.handleClick}>
          CHANGE QUOTE
        </button>
      </div>
    );
  }
}

export default App;
