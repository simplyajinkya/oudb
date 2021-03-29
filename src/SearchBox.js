import React, { useState } from 'react';

function SearchBox(props) {
  const [query, setQuery] = useState(props.query);

  return (
    <div className="searchBox">
      <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
      <button type="button" onClick={() => props.onQueryChange(query)}>Search</button>
    </div>
  )
}

export default SearchBox;