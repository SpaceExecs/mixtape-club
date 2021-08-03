const express, { Router } = require('express')
const lyricRoutes = Router();
const { User, Playlist } = require('../../database/index')


const { fetchLyrics, fetchSongDetails } = require('../API/genius')
const { explicitSearch } = require('../API/musixmatch')

export default lyricRoutes