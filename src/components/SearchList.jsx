import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import SearchListItem from "./SearchListItem.jsx";

/** SearchList component renders list of searched songs at the create-mixtapes route
 * and is a child component of CreateMixtapes.
 */

const SearchList = (props) => {
  const { searchResults, onResultClick } = props;

  return (
    <ul className="list-group col-sm-12 col-md-12 search-list">
      <li className="list-group-item active bg-info border border-info">
        Top Results
        <FontAwesomeIcon icon={faAngleDown} />
      </li>
      {searchResults.map((searchResult, i) => (
        <SearchListItem
          searchResult={searchResult}
          onResultClick={onResultClick}
          key={i}
        />
      ))}
    </ul>
  );
};

export default SearchList;
