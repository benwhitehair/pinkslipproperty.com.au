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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.pinkslipproperty.com.au`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/success`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`], // Purge only tailwind
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
