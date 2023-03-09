import {
  Container,
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
} from "@chakra-ui/react";
import NavButtons from "../../components/navButtons";

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/articles/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  const numOfExercises = data.length;
  let article = data.filter((article) => article.id == context.query.id);

  article = article[0];
  return {
    props: { article, numOfExercises },
  };
};

export default function Article({ article, numOfExercises }) {
  const section = "articles";
  return (
    <>
    <Container maxW="2xl" minH="sm">
      <Card key={article.id}>
        <CardHeader>
          <Heading size="lg">{article.title}</Heading>
          <Text fontSize="md">
            {new Date(article.date_written).toDateString()}
          </Text>
        </CardHeader>
        <CardBody>
          <Text fontSize="lg">{article.article_content}</Text>
        </CardBody>
      </Card>
    </Container>
      <NavButtons numOfExercises={numOfExercises} section={section} />
      </>
  );
}
