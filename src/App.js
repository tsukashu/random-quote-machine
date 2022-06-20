/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import axios from 'axios';

// child components
import Tweet from './TweetButton';

const SetRandomIndex = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return index;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      username: '',
      quoteData: [],
      index: 0,
    };
  }
  componentDidMount() {
    const gistUrl =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    axios
      .get(gistUrl)
      .then((res) => res.data)
      .then((data) => {
        const index = this.setState({
          quoteData: data.quotes,
          index: Math.floor(Math.random() * data.quotes.length),
          isLoaded: true,
        });
      });
  }

  handleClick = () => {
    this.setState((state) => {
      return { index: Math.floor(Math.random() * state.quoteData.length) };
    });
  };

  render() {
    if (this.state.isLoaded !== true) {
      return <div>Now Loading...</div>;
    } else {
      const quote = this.state.quoteData[this.state.index].quote;
      const author = this.state.quoteData[this.state.index].author;
      return (
        <div id='quote-box'>
          <div className='contents'>
            <h2 id='text'>{quote}</h2>
            <p id='author'>{author}</p>
          </div>

          <div className='buttons'>
            <Tweet text={quote} />
            <Button
              variant='contained'
              id='new-quote'
              onClick={this.handleClick}
            >
              CHANGE QUOTE
            </Button>
          </div>
        </div>
      );
    }
  }
}
export default App;
