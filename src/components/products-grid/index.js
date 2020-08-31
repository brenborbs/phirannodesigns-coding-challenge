import React from 'react';
import PropTypes from 'prop-types';
import { ProductTile } from './product-tile';

export function ProductsGrid({ products }) {
  return (
    <div className="md:flex flex-wrap">
      {products.map((product) => (
        <ProductTile
          handle={product.handle}
          minPrice={product.priceRange.minVariantPrice.amount}
          description={product.description}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          key={product.shopifyId}
          title={product.title}
        />
      ))}
    </div>
  );
}

ProductsGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
