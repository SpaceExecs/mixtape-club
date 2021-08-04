/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react";

/** TapeImageCard component renders each of the individual cassette tape options that the user can
 * choose from at the create-mixtape route and is a child component of PlaylistImageSelector
 */

const TapeImageCard = (props) => {
  const { builderImage, tapeImage, selectImage, tapeBackgroundColor } = props;

  return (
    <div
      className="card tape-image-card"
      style={
        builderImage === tapeImage ?
          { backgroundColor: "#17a2b8" } :
          { backgroundColor: tapeBackgroundColor }
      }
      onClick={(event) => selectImage(event, tapeImage)}
    >
      <img className="card-img-top" src={tapeImage.image} alt="Tape Cover" />
    </div>
  );
};

export default TapeImageCard;
