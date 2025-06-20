module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'),
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    }),
  ],
};
