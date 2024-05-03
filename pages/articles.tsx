import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Text,
  Button,
  Card,
  CardBody,
  Image,
  Link,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";

interface Article {
  _id: number;
  title: string;
  content: string;
  id: string;
  likes: number;
  comments: [];
}

export default function Articles({ articles }: any) {
  return (
    <Container maxW="7xl" centerContent pt={8}>
      <Head>
        <title>Articles</title>
        <link rel="icon" href="../logo.png" sizes="any" />
      </Head>
      <Flex>
        <Flex flexDirection="column" maxW="4xl">
          <Text fontSize="2xl" color="primary.dark">
            Newest Articles
          </Text>

          {articles.map((article: Article) => (
            <Card mt={2} key={article._id}>
              <CardBody>
                <Image
                  src="assets/blogArticleThumbnail.avif"
                  alt="language blog logo"
                  w="75%"
                />
                <Link href={`/articles/${article.id}`}>
                  <Text fontSize="xl">{article.title}</Text>
                </Link>
                <Text fontSize="md">{article.content.slice(0, 100)}...</Text>
                <Link href={`/articles/${article.id}`}>
                  <Button bgColor="secondary.dark" m="1rem" color="white">
                    Continue Reading
                    <ChevronRightIcon />
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Flex>
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
