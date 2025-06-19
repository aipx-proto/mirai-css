module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url')({ url: 'rebase' }),
    // Add more plugins here if needed
  ]
}; 