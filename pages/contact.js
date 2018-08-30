import Layout from '../components/layout';
import Link from 'next/link';

export default () => (
  <Layout>
    This is the contact page.
    <div>
      <Link href="/media">
        <a>Media</a>
      </Link>
    </div>
  </Layout>
);
