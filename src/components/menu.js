/* eslint-disable react/destructuring-assignment */
/* eslint-disable lines-between-class-members */
import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";

export const Menu = () => {
  // const products = useStaticQuery(graphql`
  //   query {
  //     allProductsJson {
  //       nodes {
  //         id
  //         name
  //         description
  //         category
  //         image
  //       }
  //     }
  //   }
  // `);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: props.products,
  //   };
  // }
  // console.log(products);
  return (
    <div>
      <h2>Products page</h2>
      {/* {products.allProductsJson.nodes.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))} */}
    </div>
  );
};
