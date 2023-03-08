import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Container,
  Text,
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
  id: string;
}

export default function Articles({ articles }: any) {
  return (
    <Container maxW="xl" centerContent>
      <Text fontSize="2xl" color="primary.dark">{"My Lovely Articles:"}</Text>

      {articles.map((article: Article) => (
        <Card mt={2} key={article._id}>
          <CardBody>
            <Image
              src="/blogArticleThumbnail.avif"
              alt="language blog logo"
              w="75%"
            />
            <Text fontSize="xl">{article.title}</Text>
            <Text fontSize="md">{article.article_content.slice(0, 100)}...</Text>
            <Link href={`/articles/${article.id}`}>
              <Button bgColor="secondary.dark" m="1rem" color="white">
                Read Article<ChevronRightIcon />
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

  return {
    props: { articles },
  };
}
