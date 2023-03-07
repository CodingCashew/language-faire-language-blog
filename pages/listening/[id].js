import {
  Button,
  Card,
  CardBody,
  Container,
  Text,
  RadioGroup,
  Radio,
  Link
} from "@chakra-ui/react";
import { useState } from "react";

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/listening/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  let listening = data.filter((listening) => listening.id == context.query.id);

  listening = listening[0];

  return {
    props: { listening },
  };
};

function Listening({ listening }) {
  const [showScript, setShowOrHide] = useState("Show Script");

  const toggleShowOrHide = () => {
    showScript === "Show Script"
      ? setShowOrHide("Hide Script")
      : setShowOrHide("Show Script");
  };

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
    for (let questionGroup in listening.questions) {
      let questionNumber = listening.questions[questionGroup].id;
      let correctAnswer = listening.questions[questionGroup].answer;
      if (
        !answers[questionNumber] ||
        answers[questionNumber] !== correctAnswer
      ) {
        correctionsToSet[questionNumber] = `The correct answer is: ${correctAnswer}`
      } else {
        correctionsToSet[questionNumber] = "Correct!"
      }
    }
    setCorrections(correctionsToSet);
    setShowingCorrections(true);
  };

  const previousExercise = () => {
    // if (index > 0) {
    //   setIndex(index - 1);
    //   setIsShowingBack(false);
    // }
    console.log('listening.id', listening.id)
  };

  const nextExercise = () => {
    // if (index < cards.length - 1) {
    //   setIndex(index + 1);
    //   setIsShowingBack(false);
    // }
    console.log('listening.id', listening.id)
  };

  return (
    <Container maxW="2xl">
      <Text fontSize="xl">{listening.title}</Text>
      <Container>
        <Card mt={3}>
          <CardBody>
            <audio controls src={listening.audioPath} />
            <Button
              onClick={toggleShowOrHide}
              backgroundColor="secondary.dark"
              color="white"
              mt={3}
            >
              {showScript}
            </Button>
            {showScript === "Hide Script" && (
              <Text mt={3}>{listening.script}</Text>
            )}
            {listening.questions.map((question) => (
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
        <Button onClick={previousExercise} backgroundColor="secondary.dark" color="white"><Link href={`/listening/${Number(listening.id) - 1}`}>Previous</Link></Button>
        <Button onClick={nextExercise} backgroundColor="primary.dark" color="white"><Link href={`/listening/${Number(listening.id) + 1}`}>Next</Link></Button>
      </Container>
    </Container>
  );
}

export default Listening;
