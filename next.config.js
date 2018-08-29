const { GuessPlugin } = require('guess-webpack')

module.exports = {
  webpack: function (config, { isServer }) {
    config.plugins.push(new GuessPlugin({
      period: {
        startDate: new Date('5-10-2018'),
        endDate: new Date()
      },
      reportProvider() {
        return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));
      },
      runtime: {
        delegate: true,
        prefetchConfig: {
          '4g': 0.7,
          '3g': 0.7,
          '2g': 0.7,
          'slow-2g': 0.7
        }
      },
      routeProvider: false
    }))
    return config
  }
}
