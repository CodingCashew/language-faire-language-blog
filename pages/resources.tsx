import { Container, Stack, Button, Link } from "@chakra-ui/react";

function Resources() {
  return (
    <Container maxW="xl">
      <h1>Language Learning Resources</h1>
      <Stack spacing={4} direction="row" align="center">
        <Link href="/resources/category1">
          <Button
            bg="purple3"
            color="white"
            size="sm">
            Category 1
          </Button>
        </Link>
        <Link href="/resources/category2">
          <Button
            bg="teal3"
            color="white"
            size="sm">
            Category 2
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}

export default Resources;
