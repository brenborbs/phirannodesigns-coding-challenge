/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Self host fonts using Typefaces.js https://github.com/KyleAMathews/typefaces
import "typeface-inter";

import "./src/css/tailwind.css";

import React from "react";
import { ProductContextProvider } from "./src/context/ProductContext";

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>{element}</ProductContextProvider>
);

export const wrapPageElement = ({ element }) => <>{element}</>;
