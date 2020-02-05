export const getRonQuote = () => {
  return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/1')
    .then(res => res.json())
    .then(([text]) => ({
      text,
      img: 'https://ih0.redbubble.net/image.235287623.5601/flat,550x550,075,f.u1.jpg'
    }));
};
export const getSimpsonsQuote = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(([{ quote, character, image }]) => ({
      text: quote,
      name: character,
      img: image
    }));
};
export const getFuturamaQuote = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json())
    .then(([{ quote, character, image }]) => ({
      text: quote,
      name: character,
      img: image
    }));
};

