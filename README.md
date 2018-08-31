# Guess.js + Next.js

Demo application for using Guess.js with Next.js.

## Integration

There are two main points of integration - `next.config.js` and adding a snippet for prefetching the pages which are likely to be visited next.

### Webpack Config

All you need is to extend the webpack config of next.js with the `GuessPlugin`:

```ts
const { GuessPlugin } = require('guess-webpack');

module.exports = {
  webpack: function(config, { isServer }) {
    if (isServer) return config;
    config.plugins.push(
      new GuessPlugin({
        GA: 'XXXXXX',
        runtime: {
          delegate: true,
        },
        routeProvider: false
      })
    );
    return config;
  }
};
```

It's important to set `runtime.delegate: true` since we don't to delegate the prefetching logic to Next.js. You'd also need to set `routeProvider: false`. This hints Guess.js that it shouldn't parse the application and instead, it'll rely to Next.js for providing the routing information.

### Prefetch Pages

Finally, in your layout component (see `components/layout.js`) add:

```ts
import { guess } from 'guess-webpack/api';

// ...

  if (typeof window !== 'undefined') {
    Object.keys(guess()).sort(p => router.prefetch(p));
  }

// ...
```

It's important that we perform prefetching only the second time when Next.js runs webpack.

## License

MIT
