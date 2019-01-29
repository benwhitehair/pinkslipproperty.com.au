module.exports = {
  siteMetadata: {
    title: `Pinkslip Property`,
    description: `Domestic property and maintenance services`,
    siteUrl: `https://www.pinkslipproperty.com.au`,
    author: `@luke_bennett_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`], // Purge only tailwind
      },
    },
  ],
};
