/* eslint-disable linebreak-style */
require('dotenv').config();

const { getLyrics, getSong } = require('genius-lyrics-api');

// streamlines genius API
// documentation: https://github.com/farshed/genius-lyrics-api

const fetchLyrics = (title, artist) => {
  const options = {
    apiKey: process.env.GENIUS_TOKEN,
    title: 'power',
    artist: 'kanye west',
    optimizeQuery: true,
  };

  getLyrics(options)
    .then((lyrics) => {
      console.log('FROM WITHIN getLyrics', lyrics);
      return lyrics;
    })
    .catch(err => console.log(err));
};

// fetchLyrics();

const fetchSongDetails = (title, artist) => {
  const options = {
    apiKey: process.env.GENIUS_TOKEN,
    title: 'power',
    artist: 'kanye west',
    optimizeQuery: true,
  };

  getSong(options).then(song => console.log(`
  ${song.id}
  ${song.url}
  ${song.albumArt}
  ${song.lyrics}`));
};

module.exports = { fetchLyrics, fetchSongDetails };
