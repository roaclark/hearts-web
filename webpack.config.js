const path = require('path');

const paths = {
  CLIENT_DIST: path.resolve(__dirname, 'client/dist'),
  CLIENT: path.resolve(__dirname, 'client/src'),
};

module.exports = {
  entry: path.join(paths.CLIENT, 'app.js'),
  output: {
    path: paths.CLIENT_DIST,
    filename: 'app.bundle.js'
  },
};
