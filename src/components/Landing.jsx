import React from 'react';

import Hero from './Hero.jsx';
import UserMixtapesList from './UserMixtapes.jsx';
import Footer from './Footer.jsx';

/** Landing component is not currently in use.  Users are directed to either the login route or
 * the mixtape-player route when visiting/using the app.
 */

const Landing = (props) => {
  const { searchResults } = props;
  console.log(props);
  return (
    <div>
      <Hero />
      <h3>Hi Username, welcome to Mixtape Club!</h3>

    </div>
  );
};

export default Landing;
