import {
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/speaking/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  let speaking = data.filter((speaking) => speaking.id == context.query.id);

  speaking = speaking[0];

  return {
    props: { speaking },
  };
};

function Speaking({ speaking }) {
  return (
    <Container maxW="2xl">
      <Text fontSize="xl">{speaking.title}</Text>
      <Container >
      {speaking.phrases.map(prac => (
        <Card mt={3} key={prac.id}>
          <CardBody>
            <audio
              controls
              src={prac.path}
              sx={{ align: "center" }}
            />
            <Text mt={3} >
              {prac.text}
            </Text>
          </CardBody>
        </Card>
      ))}
      </Container>
    </Container>
  );
}

export default Speaking;

// export async function getServerSideProps(context: any) {
//   console.log("in getSSP");
//   let res = await fetch("http://localhost:3000/api/articles", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   let articles = await res.json();
//   return {
//     props: { articles },
//   };
// }
