/* eslint-disable no-useless-constructor */
// TODO テスト用のjsonをとりま直書きでいいので用意する。
// TODO
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='' id='quote-box'>
        <Text quotes={Quotes.quotes} />
        <Author quotes={Quotes.quotes} />
        <NewQuote />
        <TweetQuote quotes={Quotes.quotes} />
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
        {this.props.quotes[0].quote}
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
        {this.props.quotes[0].author}
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
          tweet
        </a>
      </p>
    );
  }
}

const Quotes = {
  quotes: [
    {
      quote:
        'Life isn’t about getting and having, it’s about giving and being.',
      author: 'Kevin Kruse',
    },
    {
      quote:
        'Whatever the mind of man can conceive and believe, it can achieve.',
      author: 'Napoleon Hill',
    },
    {
      quote: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein',
    },
  ],
};
export default App;
