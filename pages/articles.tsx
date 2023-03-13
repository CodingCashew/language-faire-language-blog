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
import Sidebar from "../components/sidebar";
import { blogLinks } from "../components/sidebarLinks";

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
    <Container maxW="xl" centerContent>
      <Flex>
        <Sidebar links={blogLinks} section={"articles"} />
        <Flex flexDirection="column" minW="2xl">
          <Text fontSize="2xl" color="primary.dark">
            {"My Lovely Articles:"}
          </Text>

          {articles.map((article: Article) => (
            <Card mt={2} key={article._id}>
              <CardBody>
                <Image
                  src="/blogArticleThumbnail.avif"
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
