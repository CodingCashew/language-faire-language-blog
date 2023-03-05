import {
  Card,
  CardBody,
  Container,
  Text,
  Image,
  Link,
  Button
} from "@chakra-ui/react";

function Grammar() {
  const grammarExercises = [
  {
    id:'1',
    title: 'Talking About Future Plans',
    path: '/assets/grammar.jpg'
  },
  {
    id:'2',
    title: 'Talking About What Happened In The Past',
    path: '/assets/grammar.jpg'
  },
]
  return (
    <Container maxW="xl">
      <Text fontSize='xl' m={3}>Grammar Exercises</Text>
      <Container>
      {grammarExercises.map(exercise => (
        <Card mt={2} key={exercise.id}>
          <CardBody>
            <Image src={exercise.path} alt="doing english grammar exercises" w="75%" />
            <Text>{exercise.title}</Text>
            <Link href={`/grammar/${exercise.id}`}>
              <Button bgColor="primary.main" m="1rem" color="white">
                Go To Grammar Exercise >
              </Button>
            </Link>
          </CardBody>
        </Card>
      ))}
      </Container>
    </Container>
  );
}

export default Grammar;
