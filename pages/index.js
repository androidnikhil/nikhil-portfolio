import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikhil's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
         <div className="container">
       
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        </div>
      </main>

      <Footer />
      </>
  )
}
