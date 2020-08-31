/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import { ProductContextProvider } from "./src/context/ProductContext";

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>{element}</ProductContextProvider>
);

export const wrapPageElement = ({ element }) => <>{element}</>;
