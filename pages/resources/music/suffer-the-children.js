import { Container, Text, Flex } from "@chakra-ui/react";

const song = {
  id: "4",
  artist: "Napalm Death",
  songName: "Suffer the Children",
  genre: "",
  endpoint: "K9o33gocD50",
};

export default function SufferTheChildren() {
  return (
    <Container minH="sm" maxW="6xl">
      <Flex maxW="5xl" justify="center">
        {/* sidebar here later */}
        <Container>
          <Text>
            {song.songName} by {song.artist}
          </Text>
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
              <br /> Your unflappable conceptions
              <br /> Moralistic views
              <br /> Never open to criticism
              <br /> Your overpowering ruse
              <br />
              <br /> Verse 2
              <br /> Promises of sanctuary
              <br /> In eternal bliss
              <br /> With starry eyes and cash in hand
              <br /> Pledge to all the master plan
              <br />
              <br /> Just face the truth or fund the farse
              <br />
              <br /> Verse 3
              <br /> At one with your god
              <br /> Your sole intent
              <br /> Your treasured place assured
              <br /> For a substantial rent
              <br />
              <br /> Verse 4
              <br /> Global lunacy
              <br /> Death threats for supposed blasphemy
              <br /> No room for free thought
              <br /> All non believers pushed to the floor
              <br />
              <br /> Verse 5
              <br /> Aggressive tyrants
              <br /> Supposed saints for the cause
              <br /> Judgement through force
              <br /> Faith a fuel for pointless wars
              <br />
              <br /> Verse 6
              <br /> When all is done
              <br /> Who shall benefit? Who is the one?
              <br /> Not to those who pass on
              <br /> But those dictators divine waving their deceitful wands
            </Text>
          </Container>
        </Container>
      </Flex>
    </Container>
  );
}
