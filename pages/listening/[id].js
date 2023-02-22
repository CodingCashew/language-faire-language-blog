import {
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

function Listening() {
  return (
    <Container maxW="2xl" centerContent>
      <Text fontSize="xl">Listening Practice 1</Text>
      <Container >
        <Card mt={3}>
          <CardBody>
            <audio
              controls
              src="/audio/HeyAmandaHowAreThingsWithYou.mp3"
              centerContent
              sx={{ align: "center" }}
            />
            <Text mt={3} >
              Hey, Amanda. How're things with you?
            </Text>
          </CardBody>
        </Card>
        <Card mt={3}>
          <CardBody>
            <audio
              controls
              src="/audio/HowsYourJobSearchGoing.mp3"
              centerContent
              sx={{ align: "center" }}
            />
            <Text mt={3} >
              How's your job search going?
            </Text>
          </CardBody>
        </Card>
        <Card mt={3}>
          <CardBody>
            <audio
              controls
              src="/audio/DoYouHaveAnyPlansThisWeekend.mp3"
              centerContent
              sx={{ align: "center" }}
            />
            <Text mt={3} >
              Do you have any plans this weekend?
            </Text>
          </CardBody>
        </Card>
        <Card mt={3}>
          <CardBody>
            <audio
              controls
              src="/audio/WhatAreYouDoingThisWeekend.mp3"
              centerContent
              sx={{ align: "center" }}
            />
            <Text mt={3} >
              What are you doing this weekend?
            </Text>
          </CardBody>
        </Card>
        <Card mt={3}>
          <CardBody>
            <audio
              controls
              src="/audio/DoYouWannaGrabSomethingToEat.mp3"
              centerContent
              sx={{ align: "center" }}
            />
            <Text mt={3} >
              Do you wanna grab something to eat?
            </Text>
          </CardBody>
        </Card>
        <Card mt={3}>
          <CardBody>
            <audio
              controls
              src="/audio/WannaGoToTheMoviesWithMe.mp3"
              centerContent
              sx={{ align: "center" }}
            />
            <Text mt={3} >
              Wanna go to the movies with me?
            </Text>
          </CardBody>
        </Card>
      </Container>
    </Container>
  );
}

export default Listening;

// export async function getServerSideProps(context: any) {
//   console.log("in getSSP");
//   let res = await fetch("http://localhost:3000/api/articles", {
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
