/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React from 'react';
import ProductContext from 'context/ProductContext';
import { Layout, SEO, Filters, ProductsGrid } from 'components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

export default function IndexPage() {
  const { products, collections } = React.useContext(ProductContext);

  // Set collectionProductMap
  const collectionProductMap = {};
  const selectedCollectionIdsMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  // grab url
  const selectedCollectionIds = qs.c?.split(',').filter((c) => !!c) || [];
  // searchTerms
  const searchTerm = qs.s;

  // loop selectedCollectionIds
  selectedCollectionIds.forEach((collectionId) => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  // loop thru all collections then assign each collection to shopifyId
  if (collections) {
    collections.forEach((collection) => {
      collectionProductMap[collection.shopifyId] = {};

      collection.products.forEach((product) => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  const filterByCategory = (product) => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (const key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      return false;
    }

    return true;
  };

  // searchTerm
  const filterBySearchTerm = (product) => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }

    return true;
  };

  const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <div className="md:flex">
          <div className="md:w-1/5 p-4">
            {!!searchTerm && !!filteredProducts.length && (
              <h2 className="mt-2 pl-4">
                Search term: <strong>'{searchTerm}'</strong>
              </h2>
            )}
            {!!filteredProducts.length && (
              <h2 className="mt-4 pl-4">
                <strong>{filteredProducts.length}</strong> products
              </h2>
            )}
            <Filters />
          </div>
          {!filteredProducts.length && (
            <div className="md:w-3/4 pt-12">
              <h3 className="text-center matches">
                <span>Oh no! Nothing matches</span>
                &nbsp;
                <strong>'{searchTerm}'</strong>
              </h3>
              <div className="text-center matches">
                To help with your search why not try:
                <br />
                <br />
                <ul>
                  <li>Checking your spelling</li>
                  <li>Using less words</li>
                  <li>Try using a different search term</li>
                </ul>
              </div>
            </div>
          )}
          {!!filteredProducts.length && (
            <div className="md:w-4/5 p-4">
              <ProductsGrid products={filteredProducts} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
