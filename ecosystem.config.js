
require('dotenv').config();

module.exports = {
  apps : [{
    name: 'mixtape-club',
    script: './server/index.js',
    watch: '.',
    env_production: {
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    }
  },
    {
      name: 'Webpack',
      script: 'npm run react-dev',
      watch: '.',
      env_production: {
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
      }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-3-137-198-67.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/id_rsa.pub',
      ref  : 'origin/master',
      repo : 'https://github.com/SpaceExecs/mixtape-club.git',
      path : '/home/ubuntu/mixtape-club',
      env_production: {
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
      },
      ssh_options: "StrictHostKeyChecking=no",
      'pre-deploy-local': '',
      'post-deploy' : 'npm run restart',
      'pre-setup': ''
    }
  }
};


