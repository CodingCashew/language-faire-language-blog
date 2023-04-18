import { Container, Text, Flex } from "@chakra-ui/react";

const song = {
  id: "1",
  artist: "Jewel",
  songName: "You Were Meant For Me",
  genre: "",
  endpoint: "4WW4qcmrJ3E",
};

export default function YouWereMeantForMe() {
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
              Verse 1
              <br />I hear the clock, it's six A.M
              <br />I feel so far from where I've been
              <br />I got my eggs, I got my pancakes too
              <br />I got my maple syrup, everything but you
              <br />I break the yolks and make a smiley face
              <br />I kinda like it in my brand new place
              <br />
              Wipe the spots up off the mirror
              <br />
              Don't leave my keys in the door
              <br />I never put wet towels on the floor anymore 'cause
              <br />
              <br />
              Chorus
              <br />
              Dreams last for so long
              <br />
              Even after you're gone
              <br />
              And I know that you love me
              <br />
              And soon you will see
              <br />
              You were meant for me
              <br />
              And I was meant for you
              <br />
              <br />
              Verse 2
              <br />I called my momma, she was out for a walk
              <br />
              Consoled a cup of coffee but it didn't wanna talk
              <br />
              So I picked up the paper, it was more bad news
              <br />
              More hearts being broken or people being used
              <br />
              Put on my coat in the pouring rain
              <br />I saw a movie and it just wasn't the same
              <br />
              'Cause it was happy or I was sad
              <br />
              And it made me miss you oh so bad 'cause
            </Text>
          </Container>
        </Container>
      </Flex>
    </Container>
  );
}
