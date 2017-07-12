const precss = require('precss');
const postCssNested = require('postcss-nested');
const postCssApply = require('postcss-apply');
const postCssVariables = require('postcss-css-variables');
const postCssSimpleVars = require('postcss-simple-vars');

module.exports = {
  plugins: [
    precss,
    postCssNested,
    postCssVariables,
    postCssApply,
    postCssSimpleVars,
  ]
};
