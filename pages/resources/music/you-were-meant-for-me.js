import { Container, Text, Flex } from "@chakra-ui/react";

const song = {
  id: "1",
  artist: "Jewel",
  songName: "You Were Meant For Me",
  genre: "",
  endpoint: "4WW4qcmrJ3E",
}

export default function YouWereMeantForMe() {
  return (
    <Container minH="sm" maxW="6xl">
      <Flex maxW="5xl">
      <Text>You Were Meant For Me by Jewel</Text>
      <Container>
        <iframe
          width="504"
          height="378"
          src={`https://www.youtube.com/embed/${musicLink.endpoint}`}
        ></iframe>
      </Container>
      </Flex>
    </Container>
  );
}
