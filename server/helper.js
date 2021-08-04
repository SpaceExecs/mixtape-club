const axios = require('axios');
require("dotenv").config();
const key = process.env.YOUTUBE_API_KEY;


const getRelatedVideos = (videoId) => {
  const options = {
    url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${key}`,
  }
  return axios(options)
  .then((response) => response)
  .catch((error) =>{
    console.log(error);
  })
}

module.exports.getRelatedVideos = getRelatedVideos;
