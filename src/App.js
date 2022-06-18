/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './App.css';
import Quotes from './quotes.json';
import Button from '@mui/material/Button';

const GetQuoteData = () => {
  return Quotes.quotes;
};

const SetRandomIndex = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return index;
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
        {/* TODO debug random index return right pair (quote and author  ) */}

        {/*        <div>
          <h2>test</h2>
          <p>
            quoteData.index <span>{this.state.index}</span>
          </p>
          <p>
            quoteData[this.state.index].quote
            <span>{this.state.quoteData[this.state.index].quote}</span>
          </p>
          <p>
            quoteData[this.state.index].author
            <span>{this.state.quoteData[this.state.index].author}</span>
          </p>
        </div>
 */}
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
