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

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/vocab/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  const numOfExercises = data.length;
  let vocab = data.filter((vocab) => vocab.id == context.query.id);

  vocab = vocab[0];

  return {
    props: { vocab, numOfExercises },
  };
};


function VocabPrac({ vocab, numOfExercises }) {
  const [cards, setCards] = useState([
    { front: "", back: "" }
  ]);

  const [isShowingBack, setIsShowingBack] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    getCards();
  });

  const getCards = async () => {
    setCards(vocab.cards);
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
    <Flex direction="column" align="center" >

      <Container
        mt={1}
        mb={3}
        minH={400}
        borderRadius={6}
        boxShadow="3px 3px 5px 1px #ccc"
      >
        <Text fontSize="2xl" mt={4} mb={4}>
          {cards[index].front}
        </Text>
        <Image src={cards[index].vocabImg} alt={cards[index].alt} maxH="150px" />

        {isShowingBack && (
          <>
            <Text fontSize="3xl" color="primary.dark" p={5}>
              {cards[index].back}
            </Text>
            <audio controls src={cards[index].audioPath} />
          </>
        )}
      </Container>
      <Text fontSize="lg" mb={1} color="primary.dark">
        {index + 1}/{cards.length}
      </Text>
      <Flex justify="center" gridGap={3}>
        {index > 0 && <Button onClick={getPrevious} bgColor="primary.main" color="white">
          <ChevronLeftIcon mr={2} />
          Previous
        </Button>}
        <Button onClick={showBack} bgColor="secondary.main" color="white">
          <ViewIcon mr={2} />
          Show
        </Button>
        {index < cards.length - 1 && <Button onClick={getNext} bgColor="primary.main" color="white">
          Next
          <ChevronRightIcon ml={2} />
        </Button>}
      </Flex>
    </Flex>
  );
}

export default VocabPrac;
