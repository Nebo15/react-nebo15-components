const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js'),
              },
            }
          }
        ],
        include: path.resolve(__dirname, '../')
      }, {
        test: /\.css?$/,
        use: ['style-loader', 'raw-loader'],
      }, {
        test: /\.md$/,
        use: ['raw-loader'],
      }, {
        test: /\.font\.(js|json)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
          {
            loader: 'webfonts-loader',
            options: { embed: true },
          },
        ]
      }
    ]
  },
};
