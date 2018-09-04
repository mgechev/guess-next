# 🔮 Guess.js + Next.js

**[Guess.js](https://github.com/guess-js/guess) is a collection of libraries & tools for enabling data-driven user-experience on the web.**

In this particular example, we combine Guess.js with Next.js to introduce predictive prefetching of JavaScript bundles. Based on user navigation patterns collected from Google Analytics or other source, Guess.js builds a machine-learning model to predict JavaScript that will be required in each subsequent page change.

For more information on how to use Guess.js, take a look at the following pages:
* [Google I/O announcement](https://www.youtube.com/watch?time_continue=2093&v=Mv-l3-tJgGk) by Addy Osmani.
* [Introducing Guess.js - a toolkit for enabling data-driven user-experiences on the Web](https://blog.mgechev.com/2018/05/09/introducing-guess-js-data-driven-user-experiences-web/)
* [Using Guess.js with static sites](https://github.com/guess-js/guess/tree/master/experiments/guess-static-sites)
* [Using Guess.js with Angular, React, and Gatsby](https://github.com/guess-js/guess/tree/master/packages/guess-webpack)

## Usage

Here's how you can try the demo:

```bash
git clone git@github.com:mgechev/guess-next
cd guess-next && npm i
npm run build && npm start
```

## Integration

Guess.js (**0.1.5 and above**) works with Next.js with only two points of integration. All you need to do is add the `GuessPlugin` to `next.config.js` and introduce a snippet for prefetching the pages which are likely to be visited next.

The following sections describe both points in details.

### Webpack Config

All you need is to extend the webpack config of your Next.js application is to add the `GuessPlugin` to `next.config.js` file, located in the root of your project. If the file does not exist, create it and add the following content:

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

We set the value of the `webpack` property of the object literal we set as value to `module.exports`. We set it to a function which alters the `GuessPlugin` to the `config.plugins` array. Notice that we check if Next.js has invoked webpack on the server and we return.

As a value of the `GA` property, we set a Google Analytics View ID. At build time, Guess.js will open a browser and try to get read-only access to extract a report and use it for the predictive analytics.

*Note that Google Analytics is not the only provider you can use to provide the user navigation report that Guess.js uses. In this example application we provide the report from a JSON file.*

As part of the object literal we also set `runtime.delegate: true` since we want to delegate the prefetching logic to Next.js. Finally, we set `routeProvider: false`. This hints Guess.js that it shouldn't parse the application and instead, it'd rely on Next.js for providing the routing information.

### Prefetch Pages

The final piece of the integration is performing the actual prefetching. In your layout component (see `components/layout.js`) add:

```ts
import { guess } from 'guess-webpack/api';

// ...

  if (typeof window !== 'undefined') {
    Object.keys(guess()).forEach(p => router.prefetch(p));
  }

// ...
```

Keep in mind that we check if `window` is `"undefined"`. This is required because we don't want to run Guess.js on the server. When we invoke `guess()`, we'll return a set of routes where each route will have an associated probability for the user to visit it.

The routes that `guess()` returns depend on the Google Analytics report that it has extracted, together with the user's effective connection type.

## License

MIT
