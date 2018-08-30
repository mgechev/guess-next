const { GuessPlugin } = require('guess-webpack');

module.exports = {
  webpack: function(config, { isServer }) {
    if (isServer) return config;
    config.plugins.push(
      new GuessPlugin({
        reportProvider() {
          return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));
        },
        runtime: {
          delegate: true,
          prefetchConfig: {
            '4g': 0.3,
            '3g': 0.3,
            '2g': 0.3,
            'slow-2g': 0.3
          }
        },
        routeProvider: false
      })
    );
    return config;
  }
};
