require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "First",
    description: "Random",
    author: "Rohan",
    data: ["item 1", "item 2"],
    person: { name: "Ron", age: "18" },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dm1mke8cilh4`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `8oyDwwU-XRkUjMC9Qpdkvv4FSqm-RgNU8BLYQDms8UU`,
      },
    },
  ],
}
