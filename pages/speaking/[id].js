import {
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

const speaking = [
  {
    id: 1,
    path: "/audio/HeyAmandaHowAreThingsWithYou.mp3",
    text: "Hey, Amanda. How're things with you?",
  },
  {
    id: 2,
    path: "/audio/HowsYourJobSearchGoing.mp3",
    text: "How's your job search going?",
  },
  {
    id: 3,
    path: "/audio/DoYouHaveAnyPlansThisWeekend.mp3",
    text: "Do you have any plans this weekend?",
  },
  {
    id: 4,
    path: "/audio/WhatAreYouDoingThisWeekend.mp3",
    text: "What are you doing this weekend?",
  },
  {
    id: 5,
    path: "/audio/DoYouWannaGrabSomethingToEat.mp3",
    text: "Do you wanna grab something to eat?",
  },
  {
    id: 6,
    path: "/audio/WannaGoToTheMoviesWithMe.mp3",
    text: "Wanna go to the movies with me?",
  },

];
function Speaking() {
  return (
    <Container maxW="2xl">
      <Text fontSize="xl">Speaking Practice 1</Text>
      <Container >
      {speaking.map(prac => (
        <Card mt={3} key={prac.id}>
          <CardBody>
            <audio
              controls
              src={prac.path}
              sx={{ align: "center" }}
            />
            <Text mt={3} >
              {prac.text}
            </Text>
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
