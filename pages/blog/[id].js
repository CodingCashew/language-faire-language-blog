import { useRouter } from 'next/router'
import {
  Container
} from "@chakra-ui/react";

function BlogArticle() {
  const router = useRouter()
  const { id } = router.query
  const article = getServerSideProps(id)
  return (
    <Container maxW="2xl" centerContent>
      {id}
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

export async function getServerSideProps(id) {
  // console.log('id in [id]:', id)
  let res = await fetch(`http://localhost:3000/api/getArticle/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let articles = await res.json();
  // console.log('articles:', articles)
  
  // console.log("paths: ", paths);
  // console.log('params in blog: ', params)

  return {
    props: { articles },
  };
}