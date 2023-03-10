import { Container, Text, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { resourcesLinks } from "../../components/sidebarLinks";

export default function Podcast() {
  return (
    <Container maxW="6xl" minH="sm">
      <Flex maxW="4xl">
        <Sidebar links={resourcesLinks} />
        <Container>
          <Text>Embed Podcast here</Text>
        </Container>
      </Flex>
    </Container>
  );
}
