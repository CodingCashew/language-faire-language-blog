import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Link } from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";
import { Article } from "../shared/interfaces/article.interface";

export default function NavButtons(props: any) {
  const {
    numOfExercises,
    section,
    id,
    articles,
  }: {
    numOfExercises: number;
    section: string;
    id: string;
    articles: Article[];
  } = props;
  const router: NextRouter = useRouter();
  // let currentExerciseNumber: number = Number(router.query.id);
  let currentExerciseNumber: number = Number(id);
  let hasPrevious: boolean =
    1 < currentExerciseNumber && currentExerciseNumber <= numOfExercises;
  const hasNext: boolean =
    0 < currentExerciseNumber && currentExerciseNumber < numOfExercises;

  let nextExerciseNumber: number = currentExerciseNumber + 1;
  let previousExerciseNumber: number = currentExerciseNumber - 1;

  let previousArticle: Article | undefined = articles.find(
    (article: Article) => Number(article.id) === previousExerciseNumber
  );
  let nextArticle: Article | undefined = articles.find(
    (article: Article) => Number(article.id) === nextExerciseNumber
  );

  return (
    <Flex justify="space-around" my={5} gap={5}>
      <Link href={`/${section}/${previousArticle?.url || ""}`}>
        <Button
          value="previous"
          backgroundColor="primary.dark"
          color="white"
          isDisabled={!hasPrevious}
        >
          <ChevronLeftIcon />
          Previous
        </Button>
      </Link>
      <Link href={`/${section}/${nextArticle?.url || ""}`}>
        <Button
          value="next"
          backgroundColor="primary.dark"
          color="white"
          isDisabled={!hasNext}
        >
          Next
          <ChevronRightIcon />
        </Button>
      </Link>
    </Flex>
  );
}
