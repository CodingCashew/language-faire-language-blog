import {
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Link,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, ViewIcon } from "@chakra-ui/icons";

function VocabPrac() {
  const [cards, setCards] = useState([
    { front: "almond", back: "almendra" },
    { front: "walnut", back: "nuez" },
  ]);

  const [isShowingBack, setIsShowingBack] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    setCards([
      {
        front: "We went swimming in the __________.",
        back: "sea",
        image: "/assets/sea.jpg",
        alt: "photo showing a body of water",
        audio: "/audio/sea.mp3",
      },
      {
        front: "She watched the sun set behind the __________.",
        back: "mountain",
        image: "/assets/mountain.jpg",
        alt: "photo showing an elevated part of land",
        audio: "/audio/mountain.mp3",
      },
    ]);
  };

  const getPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
      setIsShowingBack(false);
    }
  };
  const showBack = () => {
    if (!isShowingBack) setIsShowingBack(true);
  };
  const getNext = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setIsShowingBack(false);
    }
  };

  return (
    <Flex direction="column" align="center">
      <Text fontSize="lg" mt={1} mb={1} color="primary.dark">
        {index + 1}/{cards.length}
      </Text>
      <Container
        mt={1}
        mb={7}
        minH="240px"
        borderRadius={6}
        centerContent
        boxShadow="3px 3px 5px 1px #ccc"
      >
        <Text fontSize="2xl" mt={4} mb={4}>
          {cards[index].front}
        </Text>
        <Image src={cards[index].image} alt={cards[index].alt} maxH="150px" />

        {isShowingBack && (
          <>
            <Text fontSize="3xl" color="primary.dark" p={5}>
              {cards[index].back}
            </Text>
            <audio controls src={cards[index].audio} />
          </>
        )}
      </Container>
      <Flex justify="center" gridGap={3}>
        <Button onClick={getPrevious} bgColor="primary.main" color="white">
          <ChevronLeftIcon mr={2} />
          Previous
        </Button>
        <Button onClick={showBack} bgColor="secondary.main" color="white">
          <ViewIcon mr={2} />
          Show Back
        </Button>
        <Button onClick={getNext} bgColor="primary.main" color="white">
          Next
          <ChevronRightIcon ml={2} />
        </Button>
      </Flex>
    </Flex>
  );
}

export default VocabPrac;
