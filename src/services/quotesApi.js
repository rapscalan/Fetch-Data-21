export const getRonQuote = () => {
  return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/1')
    .then(res => res.json())
    .then(([text]) => ({
      text,
      img: 'https://ih0.redbubble.net/image.235287623.5601/flat,550x550,075,f.u1.jpg'
    }));
};

