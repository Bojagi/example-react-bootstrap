const path = require('path');

module.exports = {
  stories: ['../src/**/*.bojagi.js'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
      include: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../.bojagi'),
      ],
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['@babel/react'],
      },
      include: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../.bojagi'),
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
