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
import { Article } from "../shared/interfaces/article.interface.js";

export default function Articles({ articles }: any) {
  return (
    <Container
      maxW="100%"
      centerContent
      bgGradient="linear(to-bl, primary.dark, tertiary.dark)"
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

          {articles.sort((a:Article, b:Article) => Number(a.date_written) + Number(b.date_written)).map((article: Article) => (
            <Card my={3} key={article.url} maxH="md" maxW="2xl">
              <CardBody>
                <Image
                  src={article.imagePath}
                  alt="language blog logo"
                  maxW="50%"
                />
                <Link href={`/articles/${article.url}`}>
                  <Text fontSize="xl" mt={3}>
                    {article.title}
                  </Text>
                </Link>
                <Text fontSize="md">
                  {article.content.slice(
                    article.content.indexOf(">") + 1 || 0,
                    130
                  )}
                  ...
                </Text>
                <Link href={`/articles/${article.url}`}>
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
  let res = await fetch(`${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.langfaring.com'}/api/articles/`, {
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
