import Layout from '@/components/layout/Layout'
import Head from 'next/head'

function About() {
  return (
    <>
      <Head>
        <title>Shop Title | О компании</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width-device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logo.png" />
      </Head>

      <Layout>
        <main>
          <h1>О Компании</h1>
          <div className="overlay" />
        </main>
      </Layout>
    </>
  )
}

export default About
