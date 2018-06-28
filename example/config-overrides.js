module.exports = (config, env) => {
  config.module.rules.push(
    {
      test: /\.stories\.js?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    }
  )
  return config
};
