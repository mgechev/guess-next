import React from 'react';
import Layout from '../components/layout';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Next.js + Guess.js 🔮</h1>
        <p>
          This page demonstrates how you can use Guess.js for
          <br /> predictive prefetching with Next.js
        </p>
      </Layout>
    );
  }
}
