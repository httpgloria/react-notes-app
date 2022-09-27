import React, { useRef, useContext } from 'react';
import { AppContext } from '../context/AppContext';

import { IoSearchCircle } from 'react-icons/io5';
import { IoCloseCircleSharp } from 'react-icons/io5';

function Search() {
  const { search, setSearch } = useContext(AppContext);
  const searchInput = useRef(null);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleClear() {
    setSearch('');
    searchInput.current.focus();
  }

  return (
    <div className="search">
      <form className="search-form" action="">
        <IoSearchCircle className="search__btn" />
        <input
          onChange={handleSearch}
          className="search__field"
          type="text"
          placeholder="Search"
          value={search}
          ref={searchInput}
        />
        {search.length > 0 ? (
          <IoCloseCircleSharp onClick={handleClear} className="search__clear" />
        ) : (
          ''
        )}
      </form>
    </div>
  );
}

export default Search;
