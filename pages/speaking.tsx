import {
  Card,
  CardBody,
  Container,
  Text,
  Image,
  Link,
  Flex,
  Button,
} from "@chakra-ui/react";
import { speakingLinks } from "../components/sidebarLinks";
import Sidebar from "../components/sidebar";

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

function Speaking({ speaking }: any) {
  return (
    <Container maxW="6xl">
      <Flex maxW="5xl">
        <Sidebar links={speakingLinks} section={"speaking"} />
        <Flex minH="sm" minW="5xl" direction="column">
          <Text fontSize="xl" m={3}>
            Speaking Practice
          </Text>
          <Container>
            {speaking.map((prac: any) => (
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
        </Flex>
      </Flex>
    </Container>
  );
}

export default Speaking;
