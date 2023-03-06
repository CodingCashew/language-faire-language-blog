import {
  Container,
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
} from "@chakra-ui/react";

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/articles/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  let article = data.filter((article) => article.id == context.query.id);

  article = article[0];
  return {
    props: { article },
  };
};

export default function Article({ article }) {
  return (
    <Container maxW="2xl">
      <Card key={article.id}>
        <CardHeader>
          <Heading size="md">{article.title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{article.article_content}</Text>
        </CardBody>
      </Card>
    </Container>
  );
}
