import {
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Link,
  Text
} from "@chakra-ui/react";

function Listening() {
  return (
    <Container maxW="xl">
      <Text fontSize='xl' m={3}>Listening Practice</Text>
      <Container>
        <Card mt={2}>
          <CardBody>
            <Image src="../reading.avif" alt="language blog logo" w="75%" />
            <text>Listening Practice 1</text>
            <Link href="/listening/prac1">
              <Button bgColor="primary.main" m="1rem" color="white">
                Listen
              </Button>
            </Link>
          </CardBody>
        </Card>
        <Card mt={2}>
          <CardBody>
            <Image src="../reading.avif" alt="language blog logo" w="350px" />
            <text>Listening Practice 2</text>
            <Button bgColor="primary.main" m="1rem" color="white">
              Listen
            </Button>
          </CardBody>
        </Card>
      </Container>
    </Container>
  );
}

export default Listening;
