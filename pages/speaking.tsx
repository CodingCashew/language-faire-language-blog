import {
  Card,
  CardBody,
  Container,
  Text,
} from "@chakra-ui/react";

function Speaking() {
  // const [playingAudio, setPlayingAudio] = useState(false);

  const tempVocab = [
    {
      id: 1,
      path: "/audio/DoYouHaveAnyPlansThisWeekend.mp3",
      text: "This is an example sentence using the vocabulary word.",
    },
    {
      id: 2,
      path: "/audio/DoYouHaveAnyPlansThisWeekend.mp3",
      text: "Oh, wow. This is also an example sentence.",
    },
    {
      id: 3,
      path: "/audio/DoYouHaveAnyPlansThisWeekend.mp3",
      text: "Whoopity Doo!",
    },
    {
      id: 4,
      path: "/audio/DoYouHaveAnyPlansThisWeekend.mp3",
      text: "How now thou brown cow?",
    },
  ];

  return (
    <Container maxW="2xl" centerContent>
      <Text fontSize="xl">Speaking Practice 1</Text>
      <Container>
        {tempVocab.map((practice) => (
          <Card mt={3} key={practice.id}>
            <CardBody>
              <audio
                controls
                src={practice.path}
                sx={{ align: "center" }}
              />
              <Text mt={3}>{practice.text}</Text>
            </CardBody>
          </Card>
        ))}
      </Container>
    </Container>
  );
}

export default Speaking;

// export async function getServerSideProps(context: any) {
//   console.log("in getSSP");
//   let res = await fetch("http://localhost:3000/api/speaking", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   let articles = await res.json();
//   return {
//     props: { articles },
//   };
// }
