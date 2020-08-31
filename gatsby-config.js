const dotenv = require("dotenv");
const postCssImport = require("postcss-import");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const resolveConfig = require("tailwindcss/resolveConfig");

const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

// dotenv.config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
dotenv.config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby Starter Tailwind",
    description: "Gatsby starter styled with Tailwind.",
    author: "@luke_bennett_",
    siteUrl: "https://gatsby-starter-tailwindcss.netlify.com",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://gatsby-starter-tailwindcss.netlify.com",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter TailwindCSS",
        short_name: "Gatsby Starter",
        start_url: "/",
        background_color: fullConfig.theme.colors.teal["600"],
        theme_color: fullConfig.theme.colors.teal["600"],
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          postCssImport,
          tailwindcss(tailwindConfig),
          autoprefixer,
          ...(process.env.NODE_ENV === "production" ? [cssnano] : []),
        ],
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        apiVersion: "2020-07",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "data",
    //     path: "src/data",
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images",
      },
    },
  ],
};
