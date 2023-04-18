import { Container, Text, Flex } from "@chakra-ui/react";

export default function SnowballThrower() {
  return (
    <Container minH="sm" maxW="6xl">
      <Flex maxW="5xl">
        <Flex flexWrap="wrap" minW="5xl">
          <Text>Snowball Thrower Game Here</Text>
        </Flex>
      </Flex>
    </Container>
  );
}
