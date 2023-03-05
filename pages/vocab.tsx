import {
  Container,
  Text,
  Card,
  CardBody,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";

function Vocab() {
  return (
    <Container maxW="xl">
      <Text fontSize="xl" m={3}>
        Vocab Practice
      </Text>
      <Container>
        <Card mt={2}>
          <CardBody>
            <Image src="/vocabThumbnail.jpg" alt="language blog logo" w="75%" />
            <Text>Family Vocabulary</Text>
            <Link href="/vocab/vocab1">
              <Button bgColor="primary.main" m="1rem" color="white">
                Learn Vocab
              </Button>
            </Link>
          </CardBody>
        </Card>
        <Card mt={2}>
          <CardBody>
            <Image src="/vocabThumbnail.jpg" alt="language blog logo" w="75%" />
            <Text>Cooking Vocabulary</Text>
            <Link href="/vocab/vocab2">
              <Button bgColor="primary.main" m="1rem" color="white">
                Learn Vocab
              </Button>
            </Link>
          </CardBody>
        </Card>
      </Container>
    </Container>
  );
}

export default Vocab;
