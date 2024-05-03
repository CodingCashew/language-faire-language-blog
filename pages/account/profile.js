import { Container, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { accountLinks } from "../../components/sidebarLinks";

export default function Profile() {
  return (
    <Container maxW="6xl" minH="sm">
      <Flex maxW="4xl">
        <Sidebar links={accountLinks} section={"account"} />
        <Container>
          <Text>Profile here</Text>
        </Container>
      </Flex>
    </Container>
  );
}
