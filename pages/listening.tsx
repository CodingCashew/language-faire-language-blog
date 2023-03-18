import {
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Link,
  Flex,
  Text,
} from "@chakra-ui/react";
import { listeningLinks } from "../components/sidebarLinks"
import Sidebar from "../components/sidebar";

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
    <Container maxW="6xl">
      <Flex maxW="5xl">
        <Sidebar links={listeningLinks} section={'listening'} />
        <Flex minH="sm" minW="5xl" direction="column">
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
      </Flex>
      </Flex>
    </Container>
  );
}

export default Listening;


