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
import Sidebar from "../components/sidebar"

function Resources() {
  const listOfLinks = [{label: "General Resources", value: 'general'}, {label: "Cheat Sheets", value: 'pdf'}, {label: "English Games", value: 'games'}, {label: "Learn with Music", value: 'music'}, {label: "YouTube Videos", value: 'youtube'}, {label: "Podcast", value: 'podcast'}]
  return (
    <Container maxW="7xl" minH="sm" >
      <Box>
        <Text align="center" fontSize="2xl">Best Resources Ever</Text>
        <Flex>
          <Sidebar items={listOfLinks} />
          {/* <Box minW="3xs" minH="sm" border="yellow.500" borderWidth="3px" /> */}
          <Spacer />
          <Box minW="3xl" minH="sm" border="purple.500" borderWidth="3px">
            <Flex flexWrap="wrap" >
              <Card maxW="xs" m={5}>
                <CardBody>
                  <Image
                    src="/assets/DummyPDFThumbnail.png"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Phrasal Verbs</Heading>
                    <Text>
                      This cheat sheet helps you understand the most common
                      phrasal verbs used in everyday language.
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Link href="/resources/pdf/1">
                      <Button variant="solid" colorScheme="blue">
                        View
                      </Button>
                    </Link>
                    <Link>
                      <Button variant="solid" colorScheme="blue">
                        Download
                      </Button>
                    </Link>
                  </ButtonGroup>
                </CardFooter>
              </Card>

              <Card maxW="xs" m={5}>
                <CardBody>
                  <Image
                    src="/assets/DummyPDFThumbnail.png"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                  <Heading size="md">Adverbs You Must Know</Heading>
                    <Text>
                      This cheat sheet helps you understand the most common
                      phrasal words used in everyday language.
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Link href="/resources/pdf/2">
                      <Button variant="solid" colorScheme="blue">
                        View
                      </Button>
                    </Link>
                    <Link>
                      <Button variant="solid" colorScheme="blue">
                        Download
                      </Button>
                    </Link>
                  </ButtonGroup>
                </CardFooter>
              </Card>

              <Card maxW="xs" m={5}>
                <CardBody>
                  <Image
                    src="/assets/DummyPDFThumbnail.png"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Top 200 Action Verbs</Heading>
                    <Text>
                      This cheat sheet helps you understand the most common
                      action verbs used in everyday language.
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Link href="/resources/pdf/3">
                      <Button variant="solid" colorScheme="blue">
                        View
                      </Button>
                    </Link>
                    <Link>
                      <Button variant="solid" colorScheme="blue">
                        Download
                      </Button>
                    </Link>
                  </ButtonGroup>
                </CardFooter>
              </Card>

              <Card maxW="xs" m={5}>
                <CardBody>
                  <Image
                    src="/assets/DummyPDFThumbnail.png"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                  <Heading size="md">Common Slang</Heading>
                    <Text>
                      This cheat sheet helps you understand the most common
                      slang phrases used in everyday language.
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Link href="/resources/pdf/4">
                      <Button variant="solid" colorScheme="blue">
                        View
                      </Button>
                    </Link>
                    <Link>
                      <Button variant="solid" colorScheme="blue">
                        Download
                      </Button>
                    </Link>
                  </ButtonGroup>
                </CardFooter>
              </Card>

            </Flex>
          </Box>
          <Spacer />
          <Box minW="3xs" border="teal.500" borderWidth="3px" />
        </Flex>
      </Box>
    </Container>
  );
}

export default Resources;
