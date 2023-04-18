import { Container, Text, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { resourcesLinks } from "../../components/sidebarLinks";

const musicLinks = [
  {
    id: "1",
    artist: "Jewel",
    songName: "You Were Meant For Me",
    genre: "",
    endpoint: "4WW4qcmrJ3E",
  },
  {
    id: "2",
    artist: "Pharrell Williams",
    songName: "Happy",
    genre: "",
    endpoint: "rlWANMam4qk",
  },
  { id: "3", artist: "", songName: "", genre: "", endpoint: "VvcohzJvviQ" },
  { id: "4", artist: "", songName: "", genre: "", endpoint: "K9o33gocD50" },
];

export default function Music() {
  return (
    <Container maxW="6xl" minH="sm">
      <Flex maxW="4xl">
        <Sidebar links={resourcesLinks} section="resources" />
        <Flex flexDirection="column" gap={3}>
          {musicLinks.map((musicLink) => (
            <Container key={musicLink.id}>
              <iframe
                width="504"
                height="378"
                src={`https://www.youtube.com/embed/${musicLink.endpoint}`}
              ></iframe>
            </Container>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}
