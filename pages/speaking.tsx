import {
  Card,
  CardBody,
  Container,
  Text,
  Image,
  Link,
  Button
} from "@chakra-ui/react";

export async function getServerSideProps(context: any) {
  let res = await fetch("http://localhost:3000/api/speaking", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let speaking = await res.json();

  return {
    props: { speaking },
  };
}

function Speaking({ speaking }:any) {
  return (
    <Container maxW="xl">
      <Text fontSize='xl' m={3}>Speaking Practice</Text>
      <Container>
      {speaking.map((prac:any) => (
        <Card mt={2} key={prac.id}>
          <CardBody>
            <Image src={prac.imgPath} alt="language blog logo" w="75%" />
            <Text>{prac.title}</Text>
            <Link href={`/speaking/${prac.id}`}>
              <Button bgColor="primary.main" m="1rem" color="white">
                Go To Speaking Practice
              </Button>
            </Link>
          </CardBody>
        </Card>
      ))}
      </Container>
    </Container>
  );
}

export default Speaking;