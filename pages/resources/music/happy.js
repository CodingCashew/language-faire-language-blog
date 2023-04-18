import { Container, Text, Flex } from "@chakra-ui/react";

const song = {
  id: "2",
  artist: "Pharrell Williams",
  songName: "Happy",
  genre: "",
  endpoint: "rlWANMam4qk",
};

export default function Happy() {
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
              <br /> Verse 1
              <br /> It might seem crazy what I'm 'bout to say
              <br /> Sunshine she's here, you can take a break
              <br /> I'm a hot air balloon that could go to space
              <br /> With the air, like I don't care, baby, by the way
              <br />
              <br /> Chorus
              <br /> (Because I'm happy)
              <br /> Clap along if you feel like a room without a roof
              <br /> (Because I'm happy)
              <br /> Clap along if you feel like happiness is the truth
              <br /> (Because I'm happy)
              <br /> Clap along if you know what happiness is to you
              <br /> (Because I'm happy)
              <br /> Clap along if you feel like that's what you wanna do
              <br />
              <br /> Verse 2
              <br /> Here come bad news, talking this and that (Yeah!)
              <br /> Well, give me all you got, don't hold it back (Yeah!)
              <br /> Well, I should probably warn ya, I'll be just fine (Yeah!)
              <br /> No offense to you, don’t waste your time, here's why
            </Text>
          </Container>
        </Container>
      </Flex>
    </Container>
  );
}
