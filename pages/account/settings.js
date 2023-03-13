import { Container, Text, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { accountLinks } from "../../components/sidebarLinks";

export default function Settings() {
  return (
    <Container maxW="6xl" minH="sm">
      <Flex maxW="4xl">
        <Sidebar links={accountLinks} section={'account'}/>
        <Container>
          <Text>Settings here</Text>
        </Container>
      </Flex>
    </Container>
  );
}
