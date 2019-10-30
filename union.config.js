module.exports = options => {
  const { script } = options;
  return {
    mergeWebpackConfig: config => {
      // config ts
      config.module.rules[0].test = /\.(js|ts)x?$/;
      config.resolve = {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
          'react-native$': 'react-native-web',
        },
      };
      // bundle into one js file
      config.optimization = {};
      // needs to match the theme directory

      config.output.filename = 'js/[name].js';
      config.output.chunkFilename = 'js/[name].chunk.js';
      if (script === 'build') {
        config.output.publicPath = '/o/nick-react-union-theme/';
      }
      return config;
    },

    workspaces: {
      widgetPattern: 'widget',
      appPattern: 'app',
    },
  };
};
