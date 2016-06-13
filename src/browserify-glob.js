'use strict';

const glob = require('glob');
const browserify = require('browserify');

module.exports = function (pattern) {
  if (!pattern) {
    throw new Error('No pattern given');
  }

  return glob(pattern, (err, files) => {
    if (err) {
      throw new Error(err.message);
    }

    return browserify(files).bundle();
  });
};
