import { GetStaticProps, NextPage } from "next";
import clientPromise from "../lib/mongodb";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export interface Article {
  _id: number;
  title: string;
  article_content: string;
}

export default function Blog({articles}: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.myClass}>Langship</title>
        <meta name="description" content="Langship" />
        <link rel="icon" href="../logo.png" />
      </Head>
      {'My Lovely Articles:'}
      <ul className='articles'>
        {articles.map((article: Article) => (
          <>
            <h3>{article.title}</h3>
            <li key={article._id}>{article.article_content}</li>
          </>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  console.log('in getSSP')
  let res = await fetch("http://localhost:3000/api/articles", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let articles = await res.json();
  console.log('articles: ', articles, 'typeof articles: ', typeof articles)
  return {
    props: { articles },
  };
}

