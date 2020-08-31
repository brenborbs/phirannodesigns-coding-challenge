import React from 'react';
import ProductContext from 'context/ProductContext';
import { CategoryFilterItem } from './category-filter-item';

export function Filters() {
  const { collections } = React.useContext(ProductContext);

  return (
    <div className="mt-4 p-4">
      <strong>Categories</strong>
      {collections.map((collection) => (
        <CategoryFilterItem
          title={collection.title}
          key={collection.shopifyId}
          id={collection.shopifyId}
        />
      ))}
    </div>
  );
}
