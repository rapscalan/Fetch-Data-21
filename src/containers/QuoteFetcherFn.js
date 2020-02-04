import React, { useState, useEffect } from 'react';
import { getRonQuote, getSimpsonsQuote } from '../services/quotesApi';
import Quote from '../components/quotes/Quote';
import Button from '../components/commons/button/Button';
import RadioButtons from '../components/commons/radio/RadioButtons';

const quoteProviderFactory = {
  simpsons: getSimpsonsQuote,
  ron: getRonQuote
};
// state = {
//   quoteProvider: 'ron',
//   quote: {text: '', name: '', img: '' }
// }
const QuoteFetcherFn = () => {
  const [provider, setProvider] = useState('ron');
  //const [quote, setQuote] = useState([]);

  // useEffect(() => {
  //   getRonQuote()
  //     .then(res => res.json())
  //     .then(quote => console.log(quote));
  // }, []);
  useEffect(() => {

  }, []);

  return (
    <>
      <Quote />
      <Button />
    </>
  );
};

export default QuoteFetcherFn;
