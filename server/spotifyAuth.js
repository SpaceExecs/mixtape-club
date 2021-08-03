const express = require("express");
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      callbackURL: "http://localhost:3000/auth/spotify/callback",
      passReqToCallback: true,
    },
    (req, token, tokenSecret, profile, done) => {
      db.findCreate(
        { googleId: profile.id, displayName: profile.displayName },
        (err, user) => done(err, user)
      );
      process.nextTick(() => done(null, profile));
    }
  )
);
