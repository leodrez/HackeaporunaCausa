const cssnext = require('postcss-cssnext');
const smartImport = require('postcss-smart-import');
const autoprefixer = require('autoprefixer');
const browserlist = require('./browserlist');

module.exports = (webpack) => {
  return [
    smartImport({ addDependencyTo: webpack }),
    autoprefixer({ browsers: browserlist }),
    cssnext(),
  ];
};
