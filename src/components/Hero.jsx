import React from 'react';

/** Hero component renders the heading jumbotron image and app title and subtitle that can be
 * seen at the login route and is a child component of Login.
 */

const Hero = () => (
  <div className="jumbotron jumbotron-fluid hero">
    <div className="container">
      <h1 className="display-4" id="title">
        Mixtape Club
      </h1>
      <p className="lead" id="subtitle">
        A Modern App for Creating and Sharing Throwback Mixtapes
      </p>
    </div>
  </div>
);

export default Hero;
