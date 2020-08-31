import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export function ProductTile({
  title,
  // eslint-disable-next-line react/prop-types
  imageFluid,
  description,
  minPrice,
  // eslint-disable-next-line react/prop-types
  handle,
}) {
  return (
    <div className="overflow-hidden shadow-lg md:w-1/5 m-2">
      <Img className="w-full" fluid={imageFluid} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
        <p className="bold mb-3 text-base">
          from ${parseFloat(minPrice).toFixed(2)}
        </p>
        <Link
          className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
          to={`/products/${handle}`}
        >
          View product
        </Link>
      </div>
    </div>
  );
}

ProductTile.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  minPrice: PropTypes.string,
};
