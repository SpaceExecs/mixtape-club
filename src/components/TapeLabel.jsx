import React from "react";

/** TapeLabel component renders a label/title for the mixtape created by the currently logged in user
 * at the create-mixtape route and is a child component of the PlaylistImageSelector component
 */

const TapeLabel = (props) => {
  const { onLabelChange } = props;

  return (
    <div className="navbar navbar-light bg-light border border-secondary rounded-lg search">
      <input
        onChange={onLabelChange}
        className="form-control col-12"
        type="text"
        placeholder="Label Your Tape"
        aria-label="Label Your Tape"
      />
    </div>
  );
};

export default TapeLabel;
