module.exports = {
  siteMetadata: {
    title: `쇼핑몰 그로스해킹은 태거스`,
    description: `페이스북,구글,인스타 다이나믹 광고 자동화, 픽셀, 카탈로그, 캠페인 분석 한번에`,
    author: `@sunlee`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#FF54AC`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/histaff.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["PT Serif"]
        },
        custom: {
          families: ["Inter"],
          urls: ["/fonts/fonts.css"]
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
