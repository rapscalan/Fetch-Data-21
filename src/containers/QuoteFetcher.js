import React, { Component } from 'react';
import { getRonQuote, getSimpsonsQuote } from '../services/quotesApi';
import Button from '../components/commons/button/Button';
import Quote from '../components/quotes/Quote';
import RadioButtons from '../components/commons/radio/RadioButtons';

const quoteProviderFactory = {
  simpsons: getSimpsonsQuote,
  ron: getRonQuote
};

export default class QuoteFetcher extends Component{
  state = { 
    quoteProvider: 'ron',
    quote: { name: '', text: '', img: '' } };

  componentDidMount() {
    this.fetch();
  }

  changeQuoteProvider = ({ target }) => {
    this.setState({ quoteProvider: target.value });
  }

  fetch = () => {
    //return getRonQuote()
    //return getSimpsonsQuote()
    return quoteProviderFactory[this.state.quoteProvider]()
      .then(quote => this.setState({ quote }));
  };
  
  render() {
    const { quote } = this.state;
    const radioButtons = [
      { label: 'The Simpsons', value: 'simpsons' },
      { label: 'Ron Swanson', value: 'ron' }
    ];

    return (
      <>
        <RadioButtons radioButtons={radioButtons} name="quoteProvider" onChange={this.changeQuoteProvider} />
        <Quote {...quote} />
        <Button text="Get another quote" onClick={this.fetch} />
      </>
    );
  }
}
