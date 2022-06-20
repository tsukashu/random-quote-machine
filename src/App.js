/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import './App.css';
import Quotes from './quotes.json';
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
    };
  }
  componentDidMount() {
    const gistUrl =
      'https://gist.githubusercontent.com/tsukashu/f016b002ff55a7ec3428d3dada1f5e2f/raw/529de5120a04270c42533b859993b2692b718a42/quotes-test.json';

    axios
      .get(gistUrl)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          // quoteData: Quotes.quotes,
          axiosData: data.quotes,
          // index: SetRandomIndex(Quotes.quotes),
          index: SetRandomIndex(data.quotes),
          isLoaded: true,
        });
      });
  }

  handleClick = () => {
    this.setState({ index: SetRandomIndex(this.state.axiosData) });
  };

  render() {
    if (this.state.isLoaded !== true) {
      return <div>Now Loading...</div>;
    } else {
      const quote = this.state.axiosData[this.state.index].quote;
      const author = this.state.axiosData[this.state.index].author;
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
