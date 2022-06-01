/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
// TODO テスト用のjsonをとりま直書きでいいので用意する。

import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './App.css';
import Quotes from './quotes.json';
import { render } from '@testing-library/react';
const quotes = Quotes.quotes;

function SetRandomeQuotes(key) {
  console.log('test');
  let index = Math.floor(Math.random() * quotes.length);
  return quotes[index][key];
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
  }

  componentDidMount() {
    this.setState({ quote: SetRandomeQuotes('quote') });
    this.setState({ author: SetRandomeQuotes('author') });
  }

  render() {
    return (
      <div className='' id='quote-box'>
        <Text quote={this.state.quote} />
        <Author author={this.state.author} />
        <NewQuote />
        <TweetQuote quotes={quotes} />
      </div>
    );
  }
}

class Text extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='' id='text'>
        {this.props.quote}
      </div>
    );
  }
}

class Author extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='' id='author'>
        {this.props.author}
      </div>
    );
  }
}

class NewQuote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className='' id='new-quote'>
        new-quote
      </button>
    );
  }
}

class TweetQuote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const twitterUrl = 'http://twitter.com/intent/tweet';
    const hashtags = ['quote', 'freeCodeCamp'];
    const text = this.props.quotes[0].quote;

    return (
      <p>
        <a
          href={`${twitterUrl}?text=${text}&hashtags=${hashtags}`}
          target='_blank'
          rel='noopener noreferrer'
          id='tweet-quote'
        >
          <Icon icon='fa-brands:twitter-square' color='#1DA1F2' /> tweet
        </a>
      </p>
    );
  }
}

export default App;
