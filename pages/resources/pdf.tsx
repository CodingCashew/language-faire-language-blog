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

const pdfs = [
  {
    image: "/assets/DummyPDFThumbnail.png",
    alt: "snippet of cheat sheet",
    title: "Phrasal Verbs",
    description:
      "This cheat sheet helps you understand the most common phrasal verbs used in everyday language.",
    id: "1",
    downloadLink: "",
  },
  {
    image: "/assets/DummyPDFThumbnail.png",
    alt: "snippet of cheat sheet",
    title: "Adverbs You Must Know",
    description:
      "This cheat sheet helps you understand the most common adverbs used in everyday language.",
    id: "2",
    downloadLink: "",
  },
  {
    image: "/assets/DummyPDFThumbnail.png",
    alt: "snippet of cheat sheet",
    title: "Top 200 Action Verbs",
    description:
      "This cheat sheet helps you understand the most common action verbs used in everyday language.",
    id: "3",
    downloadLink: "",
  },
  {
    image: "/assets/DummyPDFThumbnail.png",
    alt: "snippet of cheat sheet",
    title: "Common Slang",
    description:
      "This cheat sheet helps you understand the most common slang phrases used in everyday language.",
    id: "4",
    downloadLink: "",
  },
];

export default function Pdf() {
  return (
    <Container maxW="6xl" minH="sm">
      <Flex maxW="4xl">
        <Sidebar links={resourcesLinks} section="resources" />
        <Flex flexDirection="row" flexWrap="wrap" minW="4xl">
          {pdfs.map((pdf) => (
            <Card maxW="xs" m={5} key={pdf.id}>
              <CardBody>
                <Image src={pdf.image} alt={pdf.alt} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{pdf.title}</Heading>
                  <Text>{pdf.description}</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Link href={`/resources/pdf/${pdf.id}`}>
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
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}
