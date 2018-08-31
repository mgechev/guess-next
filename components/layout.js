import { withRouter } from 'next/router';
import { guess } from 'guess-webpack/api';

import Link from 'next/link';
import Head from 'next/head';

const layout = ({ router, children, title = '🔮 Next.js + Guess.js' }) => {
  let predictions = [];
  if (typeof window !== 'undefined') {
    predictions = Object.keys(guess()).sort((a, b) => a.length - b.length);
    predictions.forEach(p => router.prefetch(p));
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet" />
        <link rel="stylesheet" href="/static/styles.css" />
      </Head>
      <header>
        <nav>
          <span className="guess-logo">
            <img src="/static/guess.png" />
          </span>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          <Link href="/example">
            <a>Example</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
        </nav>
      </header>
      <br />
      Navigate through the application to see the magic
      <br />
      The user will likely visit ✨
      <ul className="predictions">
        {predictions.map((c, idx) => (
          <li
            onAnimationEnd={e => (e.target.style.opacity = 1)}
            key={'c-' + idx}
            style={{ opacity: 0, animationDelay: idx * 0.2 + 's' }}
          >
            {c}
          </li>
        ))}
      </ul>
      <div className="explanation">I used the statistics you already have to make this prediction.</div>
      <br />
      <div
        className="content"
        onAnimationEnd={e => (e.target.style.opacity = 1)}
        style={{ opacity: 0, animationDelay: 0.5 + predictions.length * 0.2 + 's' }}
      >
        {children}
      </div>
    </div>
  );
};

export default withRouter(layout);
