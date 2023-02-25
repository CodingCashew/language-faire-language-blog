import { GetStaticProps, NextPage } from "next";
import clientPromise from "../lib/mongodb";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Container,
  Flex,
  Input,
  Button,
  Card,
  CardBody,
  Image,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

export interface Article {
  _id: number;
  title: string;
  article_content: string;
}

export default function Blog({ articles }: any) {

  return (
    <Container maxW="xl">
      {"My Lovely Articles:"}

      {articles.map((article: Article) => (
        <Card mt={2} key={article._id}>
          <CardBody>
            <Image
              src="/blogArticleThumbnail.avif"
              alt="language blog logo"
              w="75%"
            />
            <text>{article.title}</text>
            <Link href={`/blog/${article._id}`}>
              <Button bgColor="primary.main" m="1rem" color="white">
                Read Article
              </Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  let res = await fetch("http://localhost:3000/api/articles", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let articles = await res.json();
  // console.log('articles: ', articles)
  
  // console.log("paths: ", paths);
  // console.log('params in blog: ', params)

  return {
    props: { articles },
  };
}
