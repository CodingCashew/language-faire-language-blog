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
import Sidebar from "../../components/sidebar";
import { resourcesLinks } from "../../components/sidebarLinks";

const games = [
  {
    image: "/assets/game.png",
    alt: "",
    title: "Snowball Thrower",
    description: "Practice your spelling with this enthralling game!",
    id: "1",
    endpoint: "snowball-thrower",
  },
];

export default function Games() {
  return (
    <Container maxW="6xl" minH="sm">
      <Flex maxW="5xl">
        <Sidebar links={resourcesLinks} />
        <Flex flexWrap="wrap" minW="5xl">
          {games.map((game: any) => (
            <Card maxW="xs" m={5} key={game.id}>
              <CardBody>
                <Image src={game.image} alt={game.alt} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{game.title}</Heading>
                  <Text>{game.description}</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Link href={`/resources/games/${game.endpoint}`}>
                    <Button variant="solid" backgroundColor="secondary.dark" color="white">
                      Play
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}
