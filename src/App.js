import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import SearchBox from './SearchBox';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('norway');
  const [url, setUrl] = useState(`http://universities.hipolabs.com/search?&country=${query}`);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      // fetch data
      try {
        const response = await fetch(url);
        const result = await response.json();

        setData(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  function searchHandler(query) {
    setUrl(`http://universities.hipolabs.com/search?&country=${query}`);
  }

  return (
    <div className="page">
      <h1>World Universities</h1>

      <SearchBox query={query} onQueryChange={searchHandler} />

      {/* if error */}
      {isError && <div>Something went wrong...</div>}

      {/* show data */}
      { isLoading ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          <div className="archive">
            {data.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </div>
          <div></div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;