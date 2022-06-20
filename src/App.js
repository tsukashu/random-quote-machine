/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './App.css';
import Quotes from './quotes.json';
import Button from '@mui/material/Button';
// child components
import Tweet from './TweetButton';

const GetQuoteData = () => {
  return Quotes.quotes;
};

const SetRandomIndex = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return index;
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteData: GetQuoteData(),
      index: SetRandomIndex(Quotes.quotes),
    };
  }
  componentDidMount() {}

  handleClick = () => {
    // renew state with function.
    // console.log('this is ;', this); //for debug on "this"
    this.setState({ index: SetRandomIndex(Quotes.quotes) });
  };

  render() {
    return (
      <div id='quote-box'>
        <div className='contents'>
          <h2 id='text'>{this.state.quoteData[this.state.index].quote}</h2>
          <p id='author'>{this.state.quoteData[this.state.index].author}</p>
        </div>
        
        <div className='buttons'>
          <Tweet text={this.state.quoteData[this.state.index].quote} />
          <Button variant='contained' id='new-quote' onClick={this.handleClick}>
            CHANGE QUOTE
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
