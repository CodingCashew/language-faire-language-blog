import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import about from './about'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Khen Mini Market</title>
        <meta name="description" content="Khen Mini Market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
