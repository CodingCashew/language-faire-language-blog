import { Button, Container, Input, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";

const answers = {
  one: "have",
  two: "been",
  three: "Have",
  four: "you",
  five: "seen",
};

function GrammarExercise() {
  const [revealAnswers, setRevealingAnswers] = useState(false);
  const [values, setValues] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [corrections, setCorrections] = useState({});

  const checkAnswers = () => {
    setRevealingAnswers(true)

    for (let questionNumber in values) {
      if (values[questionNumber].toLowerCase().trim() !== answers[questionNumber].toLowerCase()) {
        setCorrections((corrections) => ({
          ...corrections,
          [questionNumber]: answers[questionNumber],
        }));
      }
    }
  };

  const clearAnswers = () => {
    setRevealingAnswers(false)
    setValues({
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
    });
    setCorrections({});
  }

  return (
    <Container maxW="2xl">
      <Text fontSize="xl" align="center">
        Hardcoded Grammar Exercise
      </Text>
      <Container maxW="2xl">
        <Text fontSize="lg">
          1. I
          <Input htmlSize={4} width="auto" name="one" onChange={handleChange} />
          <Input htmlSize={4} width="auto" name="two" onChange={handleChange} />
          to France. (to be)
        </Text>
        <Flex>
          {corrections['one'] && <Text ml={3} p={2} color="primary.dark">{corrections['one']}</Text>}
          {corrections['two'] && <Text p={2} color="primary.dark">{corrections['two']}</Text>}

        </Flex>
        <Text fontSize="lg">
          2.
          <Input
            htmlSize={4}
            width="auto"
            name="three"
            onChange={handleChange}
          />
          <Input
            htmlSize={4}
            width="auto"
            name="four"
            onChange={handleChange}
          />
          <Input
            htmlSize={4}
            width="auto"
            name="five"
            onChange={handleChange}
          />
          my keys? (you / to see)
        </Text>
        <Flex>
          {corrections['three'] && <Text ml={3} p={2} color="primary.dark">{corrections['three']}</Text>}
          {corrections['four'] && <Text p={2} color="primary.dark">{corrections['four']}</Text>}
          {corrections['five'] && <Text p={2} color="primary.dark">{corrections['five']}</Text>}
        </Flex>
        {!Object.keys(corrections).length && revealAnswers && <Text color="primary.main">You got them all correct!!</Text>}
        <Button onClick={checkAnswers}>Check Answers</Button>
        <Button onClick={clearAnswers}>Reset Answers</Button>
      </Container>
    </Container>
  );
}

export default GrammarExercise;