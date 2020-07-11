// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  [withBundleAnalyzer],
  // your other plugins here

]);
