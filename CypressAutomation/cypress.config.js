// const path = require('path');
// const webpack = require('@cypress/webpack-preprocessor');
// const webpackOptions = require('../webpack.config.js');

// module.exports = (on, config) => {
//   on('file:preprocessor', webpack({ webpackOptions }));
// };

// module.exports = {
//   mode: 'development',
//   entry: './cypress/support/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.feature$/,
//         use: [
//           {
//             loader: 'gherkin-webpack-loader',
//           },
//         ],
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },
// };
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  return config
}
module.exports = ({
  e2e: {
    baseUrl: 'https://demo.seleniumeasy.com/',
    watchForFileChanges: true,
    specPattern: "**/*.feature",
    supportFile:'cypress/support/e2e.js',
    specPattern: "**/*.feature",
    supportFile:'cypress/support/e2e.js'
  },
});