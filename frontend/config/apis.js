const env = process.env.NODE_ENV || 'development'

/* eslint camelcase: ["error", {properties: "never"}] */

const apiEndpoints = {
  development: {
    api: 'http://localhost:3030/',
    assets: 'http://localhost:3030',
  },
  test: {
    api: 'http://localhost:3030/',
  },
  production: {
    api: 'http://localhost:3030/',
    assets: 'http://localhost:3030',
  },
}

module.exports = apiEndpoints[env]
