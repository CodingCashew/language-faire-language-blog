import {
  Container,
  Text,
  Flex,
  Box,
  Link,
  Spacer,
  Card,
  Image,
  Stack,
  Heading,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { resourcesLinks } from "../components/sidebarLinks"
import Sidebar from "../components/sidebar";

const resources = [
  { id: '1', title: "Audible", description: "Buy listening to a story in English, you start expanding your passive vocabulary and increasing your listening comprehension.", link: "", image: "/assets/audible.png", alt: "" },
  { id: '2', title: "Spotify", description: "Learning English through music helps make the language stick.", link: "", image: "/assets/spotify.jpg", alt: "" },
  { id: '3', title: "Grammarly", description: "Correct your mistakes and receive critical writing advice.", link: "", image: "/assets/grammarly.png", alt: "" },
  { id: '4', title: "Kindle", description: "Develop your reading comprehension while enjoying enchanting stories.", link: "", image: "/assets/kindle.png", alt: "" }
]

function Resources() {
  return (
    <Container maxW="6xl" minH="sm">
      <Flex maxW="5xl">
        <Sidebar links={resourcesLinks} />
        <Flex minH="sm" direction="column">
          <Text align="center" fontSize="2xl">
            Best Resources Ever
          </Text>

          {resources.map((resource: any) => (
          <Card
            key={resource.id}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            m={3}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "300px" }}
              src={resource.image}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">{resource.title}</Heading>

                <Text py="2">
                  {resource.description}
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Buy My Shit ~
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export default Resources;
