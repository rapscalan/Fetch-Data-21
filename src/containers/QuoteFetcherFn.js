import React, { useState, useEffect } from 'react';
import { getRonQuote, getSimpsonsQuote, getFuturamaQuote } from '../services/quotesApi';
import Quote from '../components/quotes/Quote';
import Button from '../components/commons/button/Button';
import RadioButtons from '../components/commons/radio/RadioButtons';

const quoteProviderFactory = {
  simpsons: getSimpsonsQuote,
  ron: getRonQuote,
  futurama: getFuturamaQuote
};

const QuoteFetcherFn = () => {
  const [provider, setProvider] = useState('ron');
  const [quote, setQuote] = useState({ name: '', text: '', img: '' });

  const handleProvider = ({ target }) => setProvider(target.value);

  useEffect(() => {
    fetchQuote();
  }, [provider]);

  const fetchQuote = ()=>{
    quoteProviderFactory[provider]()
      .then(quote => setQuote(quote));
  };
  
  const radioButtons = [
    { label: 'The Simpsons', value: 'simpsons' },
    { label: 'Ron Swanson', value: 'ron' },
    { label: 'Futurama', value: 'futurama' }
  ];

  return (
    <>
      <RadioButtons radioButtons={radioButtons} name="quoteProvider" onChange={handleProvider}/>
      <Quote {...quote} />
      <Button text="Get another quote" onClick={fetchQuote}/>
    </>
  );
};

export default QuoteFetcherFn;
