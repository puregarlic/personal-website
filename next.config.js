require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    endpoint: process.env.TAKESHAPE_API_ENDPOINT,
    accessToken: process.env.TAKESHAPE_ACCESS_TOKEN
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
