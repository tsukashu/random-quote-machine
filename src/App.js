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

const TestAxios = () => {
  const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';
  axios
    .get(baseURL)
    .then((res) => {
      console.log(res.status);
      console.log(res.data);
      return res.data;
    })
    .then((data) => {
      const dataType = Object.prototype.toString.call(data);
      console.log(dataType);
    });
};

const SetRandomIndex = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return index;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.setState({
      quoteData: Quotes.quotes,
      index: SetRandomIndex(Quotes.quotes),
      isLoaded: true,
    });
  }

  handleClick = () => {
    // renew state with function.
    // console.log('this is ;', this); //for debug on "this"
    this.setState({ index: SetRandomIndex(Quotes.quotes) });
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
          <div className='AxiosTest'>
            AxiosTest
            <h3>pls push button to run axios.get</h3>
            <button onClick={() => TestAxios()}>TestAxios</button>
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
