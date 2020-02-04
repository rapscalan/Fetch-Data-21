import React, { Component } from 'react';
import { getRonQuote } from '../services/quotesApi';
import Button from '../components/commons/button/Button';
import Quote from '../components/quotes/Quote';

export default class QuoteFetcher extends Component{
  state = { 
    quoteProvider: 'ron',
    quote: { name: '', text: '', img: '' } };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    return getRonQuote()
      .then(quote => this.setState({ quote }));
  };
  
  render() {
    const { quote } = this.state;
    return (
      <>
        <Quote {...quote} />
        <Button text="Get another quote" onClick={this.fetch} />
      </>
    );
  }
}
