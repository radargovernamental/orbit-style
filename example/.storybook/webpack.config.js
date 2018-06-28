const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        include: [
          path.resolve(__dirname, '../src/stories'),
        ],
        enforce: 'pre',
      },
    ],
  },
};
