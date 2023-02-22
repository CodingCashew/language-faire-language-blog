import { GetStaticProps, NextPage } from "next";
import clientPromise from "../lib/mongodb";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container, Flex, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export interface Article {
  _id: number;
  title: string;
  article_content: string;
}

export default function Blog({ articles }: any) {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const handleChange = e => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  const searchArticles = () => {
    console.log('in searchArticles')
    fetch('/api/searchArticles', {
      method: 'POST',
      body: JSON.stringify({ searchValue }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        
        setFilteredData(data)
        
      })
      .catch((err) => console.log(err));
      console.log('filteredData:', filteredData)
    }

  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.myClass}>LangBlog</title>
        <meta name="description" content="LangBlog" />
        <link rel="icon" href="../logo.png" />
      </Head>
      <Container maxW="xl">
        <Flex m="5">
          <Input placeholder="Search Articles..." onChange={handleChange}/>
          <Button bg="primary.main" color="white" size="md" ml="3" onClick={searchArticles}>
            Search
          </Button>
        </Flex>
        {"My Lovely Articles:"}
        {!filteredData.length && <ul className="articles">
          {articles.map((article: Article) => (
            <>
              <h3>{article.title}</h3>
              <li key={article._id} className="article">
                {article.article_content}
              </li>
            </>
          ))}
        </ul>}
        {filteredData && <ul className="articles">
          {filteredData.map((article: Article) => (
            <>
              <h3>{article.title}</h3>
              <li key={article._id} className="article">
                {article.article_content}
              </li>
            </>
          ))}
        </ul>}
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
  return {
    props: { articles },
  };
}
