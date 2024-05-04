import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Link } from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";

export default function NavButtons(props: any) {
  const {
    numOfExercises,
    section,
  }: { numOfExercises: number; section: string } = props;
  const router: NextRouter = useRouter();
  let currentExerciseNumber: number = Number(router.query.id);
  let hasPrevious: boolean =
    1 < currentExerciseNumber && currentExerciseNumber <= numOfExercises;
  const hasNext: boolean =
    0 < currentExerciseNumber && currentExerciseNumber < numOfExercises;

  let nextExerciseNumber: number = currentExerciseNumber + 1;
  let previousExerciseNumber: number = currentExerciseNumber - 1;

  return (
    <Flex justify="space-around" my={5} gap={5}>
      <Button value="previous" backgroundColor="primary.dark" color="white" isDisabled={!hasPrevious}>
        <Link href={`/${section}/${previousExerciseNumber}`}>
          <ChevronLeftIcon />
          Previous
        </Link>
      </Button>
      <Button
        value="next"
        backgroundColor="primary.dark"
        color="white"
        isDisabled={!hasNext}
      >
        <Link href={`/${section}/${nextExerciseNumber}`}>
          Next
          <ChevronRightIcon />
        </Link>
      </Button>
    </Flex>
  );
}
