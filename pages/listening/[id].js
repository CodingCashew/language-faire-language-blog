import {
  Button,
  Card,
  CardBody,
  Container,
  Text,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useState } from "react";

function Listening() {
  const [showScript, setShowOrHide] = useState("Show Script");

  const toggleShowOrHide = () => {
    showScript === "Show Script"
      ? setShowOrHide("Hide Script")
      : setShowOrHide("Show Script");
  };

  const questions = [
    {
      id: 1,
      question: "Where did Fanny go?",
      options: [
        "a. To the store",
        "b. To her dorm room",
        "c. To the bakery",
        "d. To the bank",
      ],
      answer: "b",
    },
    {
      id: 2,
      question: "What did she find in her dorm room?",
      options: [
        "a. a snake",
        "b. a stack of books",
        "c. a group of students",
        "d. a cake",
      ],
      answer: "a",
    },
    {
      id: 3,
      question: "Who helped Fanny?",
      options: [
        "a. the cashier",
        "b. her mother",
        "c. her professor",
        "d. her roommate",
      ],
      answer: "d",
    },
  ];

  const [answers, setAnswers] = useState({});
  const handleUpdateAnswers = (e) => {
    const question = e.target.id;
    const answer = e.target.value;
    const prevState = answers;
    if (question && answer) {
      prevState[question] = answer;
      setAnswers(prevState);
    }
  };

  const [corrections, setCorrections] = useState({});
  const [showingCorrections, setShowingCorrections] = useState(false);
  const handleShowCorrections = () => {
    const correctionsToSet = {}
    for (let questionGroup in questions) {
      let questionNumber = questions[questionGroup].id;
      let correctAnswer = questions[questionGroup].answer;
      if (
        !answers[questionNumber] ||
        answers[questionNumber] !== correctAnswer
      ) {
        console.log("question wrong:", questionNumber);
        console.log("user answer:", answers[questionNumber]);
        console.log("correct answer:", correctAnswer);
        correctionsToSet[questionNumber] = `The correct answer is: ${correctAnswer}`
      } else {
        console.log("Correct!");
        correctionsToSet[questionNumber] = "Correct!"
      }
    }
    console.log('correctionsToSet: ', correctionsToSet)
    setCorrections(correctionsToSet);
    setShowingCorrections(true);
  };

  return (
    <Container maxW="2xl">
      <Text fontSize="xl">Listening Practice 1</Text>
      <Container>
        <Card mt={3}>
          <CardBody>
            <audio controls src="/audio/HeyAmandaHowAreThingsWithYou.mp3" />
            <Button
              onClick={toggleShowOrHide}
              backgroundColor="secondary.dark"
              color="white"
              mt={3}
            >
              {showScript}
            </Button>
            {showScript === "Hide Script" && (
              <Text mt={3}>
                This is a long transcription of the long audio clip that will
                only be shown if the user selects show script. The button will
                reveal the words that are spoken in the audio so the user will
                be able to get clarification if they need it, but listening
                without the script first.
              </Text>
            )}
            {questions.map((question) => (
              <Container key={question.id} m={3}>
                <Text>
                  {question.id}. {question.question}
                </Text>
                <RadioGroup
                  m={7}
                  direction="column"
                  onClick={handleUpdateAnswers}
                >
                  {question.options.map((option) => (
                    <Radio
                      key={option[0]}
                      w="100%"
                      id={question.id}
                      value={option[0]}
                    >
                      {option}
                    </Radio>
                  ))}
                  {showingCorrections && <Text color="secondary.dark">{corrections[question.id]}</Text>}
                </RadioGroup>
              </Container>
            ))}
            <Button
              onClick={handleShowCorrections}
              backgroundColor="primary.dark"
              color="white"
            >
              Check Answers
            </Button>
          </CardBody>
        </Card>
      </Container>
    </Container>
  );
}

export default Listening;
