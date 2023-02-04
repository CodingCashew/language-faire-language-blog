import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.myClass} >LangBlog</title>
        <meta name="description" content="Langship" />
        <link rel="icon" href="../public/logo.png" />
      </Head>
    </div>
  )
}
