import React from 'react';

export function SearchButton({ placeholder, value, onChange }) {
  return (
    <div>
      <input
        type="search"
        className="bg-purple-white shadow rounded border-0 p-2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
