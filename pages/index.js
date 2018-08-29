import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default class Index extends React.Component {
  render () {
    const { name } = this.props
    return (
      <Layout>
        <h1>Next.js + Guess.js 🔮</h1>
        <p>Welcome, Next.js</p>
      </Layout>
    )
  }
}

