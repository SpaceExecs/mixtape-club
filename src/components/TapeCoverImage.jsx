import React from "react";

import LisaFrankenstein from "../assets/img/tapes/lisa-frankenstein-tape.gif";
import CassetteDeck from "../assets/img/cassette-deck.png";

/** TapeCoverImage component renders the tape deck image and cassette tape image chosen by the user
 * at the mixtape-player route and is a child component of MixtapePlayer
 */

const TapeCoverImage = (props) => {
  const { tapeCover } = props;
  return (
    <div>
      <img
        className="card-img-top col-12 col-md-12 tape-deck-image"
        alt="Cassette Deck"
        src={CassetteDeck}
      />
      <img
        className="card-img-top col-6 col-md-6 tape-cover-image"
        alt="tape Cover"
        src={tapeCover}
      />
    </div>
  );
};

export default TapeCoverImage;
