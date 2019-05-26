const { GuessPlugin } = require('guess-webpack');

module.exports = {
  webpack: function(config, { isServer }) {
    if (isServer) return config;
    config.plugins.push(
      new GuessPlugin({
        debug: true,
        reportProvider() {
          return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));
        },
        runtime: {
          delegate: true
        }
      })
    );
    return config;
  }
};
