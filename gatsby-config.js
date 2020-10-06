const sourceFilesystem = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `projects`,
    path: `${__dirname}/src/projects/`,
  },
}
const sourceFilesystemImages = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `photos`,
    path: `${__dirname}/src/photos/`,
  },
}

const gatsbyRemarkImages = {
  resolve: `gatsby-remark-images`,
  options: {
    maxWidth: 590,
  },
}

const gatsbyRemarkRelativeImages = {
  resolve: `gatsby-remark-images`,
  options: {
    maxWidth: 750,
    linkImagesToOriginal: false,
  },
}
const gatsbyTransformerRemark = {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [gatsbyRemarkRelativeImages, gatsbyRemarkImages],
  },
}

const gatsbyPluginGoogleAnalytic = {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    head: true,
    anonymize: true,
    exclude: ["/preview/**", "/do-not-track/me/too/"],
    pageTransitionDelay: 0,
    optimizeId: "UA-147999431-1",
    // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    sampleRate: 5,
    siteSpeedSampleRate: 10,
  },
}
module.exports = {
  siteMetadata: {
    title: `Snir's Portfolio`,
    titles: [
      "Front-End Web Developer",
      "Full-Stack Web Developer",
      // "WordPress expert",
      "React Professional",
      "CSS ninja",
    ],
    author: `Snir Shahar`,
    siteUrl: "https://naamanfrenkel.dev/",
    description: "Hey It's Naaamn, I am a Frontend Web Developer with more than 3 years experience in the latest web technologies",
    socials: [
      {
        name: "github",
        link: "https://github.com/snirshahar",
        user: "snirshahar",
      },
      // {
      //   name: "twitter",
      //   link: "https://twitter.com/nafrenkel",
      //   user: "nafrenkel",
      // },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/snir-shahar",
        user: "snir-shahar",
      },
      {
        name: "instagram",
        link: "https://instagram.com/snir_shahar",
        user: "snir_shahar",
      },
      {
        name: "codepen",
        link: "https://codepen.io/snirs",
        user: "snirs",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    sourceFilesystemImages,
    sourceFilesystem,
    gatsbyTransformerRemark,
    // gatsbyPluginGoogleAnalytic
  ],
}
