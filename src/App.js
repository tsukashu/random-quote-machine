/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './App.css';
import Quotes from './quotes.json';
import Button from '@mui/material/Button';

const SetRandomQuote = () => {
  const quotes = Quotes.quotes;
  const index = Math.floor(Math.random() * quotes.length);
  return {
    quote: quotes[index].quote,
    author: quotes[index].author,
  };
};
const GetRandomQuote = () => {
  const quotes = Quotes.quotes;
  const index = Math.floor(Math.random() * quotes.length);
  return {
    quote: quotes[index].quote,
    author: quotes[index].author,
  };
};

const Tweet = (props) => {
  const twitterUrl = 'http://twitter.com/intent/tweet';
  const text = props.text;
  const hashtags = ['quote', 'freeCodeCamp'];
  const twitterIcon = 'fa6-brands:twitter-square';
  const twitterIconWidth = '1.8rem';

  return (
    <p>
      <a
        href={`${twitterUrl}?text=${text}&hashtags=${hashtags}`}
        target='_blank'
        rel='noopener noreferrer'
        id='tweet-quote'
      >
        <Icon icon={twitterIcon} width={twitterIconWidth} />
      </a>
    </p>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = SetRandomQuote();
  }

  handleClick = () => {
    // renew state with function.
    // console.log('this is ;', this); //for debug on "this"
    this.setState((state) => GetRandomQuote());
  };

  render() {
    return (
      <div id='quote-box'>
        <div className='contents'>
          <h2 id='text'>{this.state.quote}</h2>
          <p id='author'>{this.state.author}</p>
        </div>
        <div className='buttons'>
          <Tweet text={this.state.quote} />
          <Button variant='contained' id='new-quote' onClick={this.handleClick}>
            CHANGE QUOTE
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
