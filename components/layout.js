import { withRouter } from 'next/router'
import { guess } from 'guess-webpack/api';

import Link from 'next/link'
import Head from 'next/head'

const layout = ({ router, children, title = '🔮 Next.js + Guess.js' }) => {
  if (typeof window !== 'undefined') {
    Object.keys(guess()).forEach(p => p.startsWith('/') ? router.prefetch(p) : router.prefetch(`/${p}`));
  }

  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
      </Head>
      <header>
        <nav>
          <Link href='/'><a>Home</a></Link> |
          <Link href='/about'><a>About</a></Link> |
          <Link href='/contact'><a>Contact</a></Link>
        </nav>
      </header>

      { children }

      <footer>
        {'Navigate through the application to see the magic!'}
      </footer>
    </div>
  );
}

export default withRouter(layout);

