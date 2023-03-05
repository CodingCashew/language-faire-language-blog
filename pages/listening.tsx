import {
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

function Listening() {
  const listening = [
    {
      id: "1",
      title: "Fanny Goes to College",
      path: '/assets/listening.jpg'
    },
    {
      id: "2",
      title: "Ted Goes to the Doctor",
      path: '/assets/listening.jpg'
    },
  ];
  return (
    <Container maxW="xl">
      <Text fontSize="xl" m={3}>
        Listening Practice
      </Text>
      <Container>
      {listening.map(prac => (
        <Card mt={2} key={prac.id}>
          <CardBody>
            <Image
              src={prac.path}
              alt="language blog logo"
              w="75%"
            />
            <Text>Listening Practice 1</Text>
            <Link href={`/listening/${prac.id}`}>
              <Button bgColor="primary.main" m="1rem" color="white">
                Listen
              </Button>
            </Link>
          </CardBody>
        </Card>
        ))}
      </Container>
    </Container>
  );
}

export default Listening;
