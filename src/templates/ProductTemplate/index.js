import React from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components';
import { navigate } from '@reach/router';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

export default function ProductTemplate(props) {
  return (
    <Layout>
      <div className="flex flex-wrap p-4">
        <div className="w-full md:w-1/2 p-4">
          <button
            className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded mb-3"
            onClick={() => navigate(-1)}
          >
            Back to products
          </button>
          <div>
            <ImageGallery images={props.data.shopifyProduct.images} />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-5xl m-4 p-5">
            Product{props.data.shopifyProduct.title}
          </h1>
          <p className="m-4 p-5">{props.data.shopifyProduct.description}</p>
          <h2 className="text-2xl m-4 p-5">
            Price: {props.data.shopifyProduct.priceRange.maxVariantPrice.amount}
          </h2>
        </div>
      </div>
    </Layout>
  );
}
