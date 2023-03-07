import {
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

export async function getServerSideProps(context: any) {
  let res = await fetch("http://localhost:3000/api/listening", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let listening = await res.json();

  return {
    props: { listening },
  };
}


function Listening({ listening }:any) {
  return (
    <Container maxW="xl">
      <Text fontSize="xl" m={3}>
        Listening Practice
      </Text>
      <Container>
      {listening.map((practice: any) => (
        <Card mt={2} key={practice.id}>
          <CardBody>
            <Image
              src={practice.imgPath}
              alt="language blog logo"
              w="75%"
            />
            <Text>{practice.title}</Text>
            <Link href={`/listening/${practice.id}`}>
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


