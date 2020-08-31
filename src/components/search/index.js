import React from 'react';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';
import { SearchButton } from './search-button';

export function Search() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || '';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (c) {
      navigate(
        `/?s=${encodeURIComponent(searchTerm)}&c=${encodeURIComponent(c)}`
      );
    } else {
      navigate(`/?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SearchButton
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          placeholder="Search..."
        />
      </form>
    </div>
  );
}
