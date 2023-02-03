import { GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import about from './about'

export default function Home({characters}: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.myClass} >Langship</title>
        <meta name="description" content="Langship" />
        <link rel="icon" href="../logo.png" />
      </Head>
      {/* {JSON.stringify(characters)} */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://rickandmortyapi.com/api/character');
  const { results } = await res.json();

  return {
    props: {
      characters: results,
    }
  }
}