import {
  Container,
  Text,
  Card,
  CardBody,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";


export async function getServerSideProps(context: any) {
  let res = await fetch("http://localhost:3000/api/vocab", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let vocab = await res.json();

  return {
    props: { vocab },
  };
}


function Vocab({ vocab }) {
  return (
    <Container maxW="xl">
      <Text fontSize="xl" m={3}>
        Vocab Practice
      </Text>
      <Container>
      {vocab.map((practice: any) => (
        <Card mt={2} key={practice.id}>
          <CardBody>
            <Image src={practice.imgPath} alt="language blog logo" w="75%" />
            <Text>{practice.title}</Text>
            <Link href={`/vocab/${practice.id}`}>
              <Button bgColor="primary.main" m="1rem" color="white">
                Learn Vocab
              </Button>
            </Link>
          </CardBody>
        </Card>
        ))}
      </Container>
    </Container>
  );
}

export default Vocab;
