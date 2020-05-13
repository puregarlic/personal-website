module.exports = {
  siteMetadata: {
    title: `Graham`,
    description: `A collection of Graham Barber's work from across the internet.`,
    author: `Graham Barber`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ["Inter"],
          urls: ["https://rsms.me/inter/inter.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-97707239-2",
        head: true,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/data/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [
          require("remark-slug"),
          require("remark-gemoji-to-emoji"),
          require("remark-unwrap-images"),
        ],
        gatsbyRemarkPlugins: ["gatsby-remark-import-code"],
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        mdx: false,
        contentPath: `${__dirname}/data/talks/`,
        basePath: "/talks",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/data/projects.json`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -48,
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Graham Barber`,
        short_name: `Graham`,
        start_url: `/`,
        background_color: `#FFC0CB`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
