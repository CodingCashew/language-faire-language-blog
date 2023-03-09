import {
  Card,
  CardBody,
  Container,
  Text,
} from "@chakra-ui/react";
import NavButtons from "../../components/navButtons"

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/speaking/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  const numOfExercises = data.length

  let speaking = data.filter((speaking) => speaking.id == context.query.id);

  speaking = speaking[0];

  return {
    props: { speaking, numOfExercises },
  };
};

function Speaking({ speaking, numOfExercises }) {
  const section = "speaking";
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
      <NavButtons numOfExercises={numOfExercises} section={section} />
      </Container>
    </Container>
  );
}

export default Speaking;