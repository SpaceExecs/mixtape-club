/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react";

/** SearchListItem component renders each song in the list of searched for songs
 * at the create-mixtape route and is a child component of SearchList
 */

const SearchListItem = (props) => {
  const { searchResult, onResultClick } = props;

  let title = searchResult.snippet.title.replace(/&amp;/g, "&");
  title = title.replace(/&#39;/g, "'");
  title = title.replace(/&quot;/g, '"');
  return (
    <li
      onClick={() => {
        onResultClick(searchResult);
      }}
      className="list-group-item search-item"
    >
      {title}
    </li>
  );
};

export default SearchListItem;
