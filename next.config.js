/* eslint-disable @typescript-eslint/no-var-requires */
const BASE_PATH = process.env.BASE_PATH || ''; 
const withPlugins = require('next-compose-plugins');

const releaseVersion = process.env.RELEASE_VERSION;
module.exports = withPlugins([
  {
    target: 'serverless',
    assetPrefix: BASE_PATH, // See references below
    publicDir: BASE_PATH, // See references below
    // trailingSlash: true,
    basePath: BASE_PATH,
    env: {
      BASE_PATH,
      APP_NAME: process.env.APP_NAME,
      APP_VERSION: process.env.npm_package_version,
      BUILD_NUMBER: process.env.GITHUB_RUN_NUMBER || 'dev',
      RELEASE_VERSION: releaseVersion,
      TARGET_BUILD_ENV: process.env.TARGET_BUILD_ENV,
      PRODUCT_AVAILABILITY_ENV_URL: process.env.PRODUCT_AVAILABILITY_ENV_URL,
      ADDRESS_SEARCH_ENV_URL: process.env.ADDRESS_SEARCH_ENV_URL,
      BT_AEM_DOMAIN: process.env.BT_AEM_DOMAIN,
    },
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId },
    ) {
      const pathMap = {
        '/': { page: '/' },
        '/emplist': { page: '/emplist' },
        // '/blackfriday': { page: '/blackfriday' },
        // '/broadband-only': { page: '/broadband-only' },
      }
      return pathMap
    },
  },
]);
