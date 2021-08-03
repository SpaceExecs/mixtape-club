import React from 'react';

/** Search component renders a search text input and button to search for songs to add to mixtapes
 * at the create-mixtapes route and is a child component of CreateMixtapes.
 */

const Search = (props) => {
  const { onChange, onSearch } = props;
  return (
    <div className="navbar navbar-light rounded-lg search d-flex justify-content-md-end">
      <input
        onChange={onChange}
        style={{ maxWidth: '73%' }}
        className="form-control mr-sm-2 col-9"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn btn-light border border-info my-2 my-sm-0 col-3"
        style={{ color: '#17a2b8' }}
        type="submit"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
