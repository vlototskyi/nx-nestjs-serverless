const { composePlugins, withNx } = require('@nrwl/webpack');
const { IgnorePlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = composePlugins(withNx(), (config) => {
  const lazyImports = [
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
    '@nestjs/microservices', 
    'cache-manager', 
    'class-validator', 
    'class-transformer'
  ];

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
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
      ...config.output,
      libraryTarget: 'commonjs2',
    },
  };
});
