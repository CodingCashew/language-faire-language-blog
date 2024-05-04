import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";

interface Article {
  _id: number;
  title: string;
  content: string;
  id: string;
  likes: number;
  comments: [];
  imagePath: string;
}

export default function Articles({ articles }: any) {
  return (
    <Container
      maxW="100%"
      centerContent
      bgGradient="linear(to-bl, secondary.dark, tertiary.main)"
    >
      <Head>
        <title>Articles</title>
        <link rel="icon" href="../logo.png" sizes="any" />
      </Head>
      <Flex my={10}>
        <Flex flexDirection="column" maxW="4xl">
          <Text fontSize="2xl" alignSelf="center" color="white" mb={3}>
            Newest Articles
          </Text>

          {articles.map((article: Article) => (
            <Card my={3} key={article._id} maxH="md" maxW="2xl">
              <CardBody>
                <Image
                  src={article.imagePath}
                  alt="language blog logo"
                  maxW="50%"
                  // mx="auto"
                />
                <Link href={`/articles/${article.id}`}>
                  <Text fontSize="xl" mt={3}>
                    {article.title}
                  </Text>
                </Link>
                <Text fontSize="md">{article.content.slice(0, 125)}...</Text>
                <Link href={`/articles/${article.id}`}>
                  <Button bgColor="secondary.dark" my={3} color="white">
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
