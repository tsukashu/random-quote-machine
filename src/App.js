/* eslint-disable no-useless-constructor */
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='' id='quote-box'>
        quote-box
        <Author />
        <NewQuote />
        <TweetQuote />
      </div>
    );
  }
}

class Author extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='' id='author'>
        author
      </div>
    );
  }
}

class NewQuote extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='' id='new-quote'>
        new-quote
      </div>
    );
  }
}

class TweetQuote extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a
        href='http://twitter.com/intent/tweet'
        target='_blank'
        rel='noopener noreferrer'
        id='tweet-quote'
      >
        tweet
      </a>
    );
  }
}

export default App;
