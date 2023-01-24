const { composePlugins, withNx } = require('@nrwl/webpack');
const TerserPlugin = require('terser-webpack-plugin');


// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  console.log(config)
  config?.plugins.push()
  return {
    ...config,
    externals: [],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
          },
        }),
      ],
    },
    output: {
      ...config?.output,
      libraryTarget: 'commonjs2',
    },
  }
});
