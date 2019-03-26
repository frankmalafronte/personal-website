module.exports = {
  siteMetadata: {
    title: `Frank Malafronte's Portfolio`,
    description: `Frank Malafronte's Portfolio Website`,
    author: `Frank Malafronte <frankamalafronte@gmail.com>`,
    keywords: `Web developer, Web, Developer, Full stack, React, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Node, pulse-code`,
        github: 'https://github.com/frankmalafronte',
        linkedin: 'https://www.linkedin.com/in/frankmalafronte',
        gatsby: 'https://www.gatsbyjs.org/',
        bulma: 'https://bulma.io/',
        siteUrl: 'https://frankmal.com',
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
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
