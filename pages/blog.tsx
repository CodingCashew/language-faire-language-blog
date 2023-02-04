import { GetStaticProps, NextPage } from "next";
import clientPromise from "../lib/mongodb";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container } from "@chakra-ui/react";

export interface Article {
  _id: number;
  title: string;
  article_content: string;
}

export default function Blog({ articles }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.myClass}>LangBlog</title>
        <meta name="description" content="LangBlog" />
        <link rel="icon" href="../logo.png" />
      </Head>
      <Container maxW="xl">
        {"My Lovely Articles:"}
        <ul className="articles">
          {articles.map((article: Article) => (
            <>
              <h3>{article.title}</h3>
              <li key={article._id} className="article">
                {article.article_content}
              </li>
            </>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  console.log("in getSSP");
  let res = await fetch("http://localhost:3000/api/articles", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let articles = await res.json();
  console.log("articles: ", articles, "typeof articles: ", typeof articles);
  return {
    props: { articles },
  };
}
