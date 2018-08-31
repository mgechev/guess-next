import Layout from '../components/layout';
import Link from 'next/link';

export default () => (
  <Layout>
    Guess.js is a library for predictive prefetching
    <br />
    for your applications. If you want to see Guess.js' logo
    <br />
    visit the{' '}
    <Link href="/media">
      <a>media</a>
    </Link>{' '}
    page.
  </Layout>
);
