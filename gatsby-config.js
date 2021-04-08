module.exports = {
  siteMetadata: {
    title: `Joe James Ronan`,
    url: `https://www.joejamesronan.com`,
    siteURL: `https://www.joejamesronan.com`,
    description: `My personal blog going over all the projects I'm working on.`,
    author: `Joe James Ronan`,
    image: '/images/room.png',
    twitterUsername: '@joejamesronan'
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/data/`
        }
      }
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sparkle.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark'
  ],
}
