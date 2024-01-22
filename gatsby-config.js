/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `3DAR`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Ruslan Ausiannikau blog about Architecture Vizualization with Unreal Engine 5`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-mdx',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/content/blogposts`,
      },
      __key: 'blogposts',
    },
  ],
}
