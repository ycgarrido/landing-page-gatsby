module.exports = {
  plugins: [
    {
      pathPrefix: `landing-page-gatsby`,
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
    "gatsby-plugin-styled-components"
  ]
};
