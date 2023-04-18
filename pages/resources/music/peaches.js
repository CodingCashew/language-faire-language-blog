import { Container, Text, Flex } from "@chakra-ui/react";

const song = {
  id: "3",
  artist: "The Presidents of the United States of America",
  songName: "Peaches",
  genre: "",
  endpoint: "VvcohzJvviQ",
};

export default function Peaches() {
  return (
    <Container minH="sm" maxW="6xl">
      <Flex maxW="5xl" justify="center">
        {/* sidebar here later */}
        <Container>
          <Text>{song.songName} by {song.artist}</Text>
          <Container minW="5xl">
            <iframe
              width="756"
              height="567"
              src={`https://www.youtube.com/embed/${song.endpoint}`}
            ></iframe>
          </Container>
          <Container minW="5xl">
            <Text>Lyrics</Text>
            <Text fontSize="2xl">
              <br />Chorus
              <br />Movin' to the country
              <br />I'm gonna eat a lot of peaches
              <br />Movin' to the country
              <br />I'm gonna eat me a lot of peaches
              <br />Movin' to the country
              <br />I'm gonna eat a lot of peaches
              <br />Movin' to the country
              <br />I'm gonna eat a lot of peaches
              <br />
              <br />Verse 1
              <br />Peaches come from a can
              <br />They were put there by a man
              <br />In a factory downtown
              <br />If I had my little way
              <br />I'd eat peaches every day
              <br />Sun-soakin' bulges in the shade
            </Text>
          </Container>
        </Container>
      </Flex>
    </Container>
  );
}
