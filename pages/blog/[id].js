import {
  Container
} from "@chakra-ui/react";

function BlogArticle({ article }) {
  return (
    <Container maxW="2xl" centerContent>
      {article}
      {/* <Text fontSize="xl">{article.title}</Text>
      <Container>
          <Card mt={3} key={article.id}>
            <CardBody>
              <Text mt={3}>{article.article_content}</Text>
            </CardBody>
          </Card>
      </Container> */}
    </Container>
  );
}

export default BlogArticle;

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/blog')
  const articles = await res.json()

  const paths = articles.map((article) => ({
    params: { id: article._id },
  }));

  return {
    props: { articles, fallback: false },
  };
}

export async function getStaticProps({ params }) {
  // console.log('params: ', params.id)

  console.log('params.id:', params.id)
  let res = await fetch(`http://localhost:3000/blog/${params.id}`, {
  // let res = await fetch(`http://localhost:3000/api/getArticle/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let article = await res.json();
  console.log('res:', res)
  console.log('article: ', article)
  return {
    props: { article },
  };
}