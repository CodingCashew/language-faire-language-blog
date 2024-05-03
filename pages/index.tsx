import { Box, Button, Container, Text, Image, Link, Flex } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Flex direction="column" w="100%">
      <Box
        w="100%"
        h="100%"
        bgGradient="linear(to-tr, secondary.light, primary.main)"
      >
        <Container
          maxW="4xl"
          minHeight="md"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            borderRadius="5px"
            boxSize="65%"
            src="/assets/pradamas-gifarry-889Qh5HJj4I-unsplash.jpg"
            alt="learning languages"
          />
          <Text fontSize="3xl" textAlign={["left"]} marginLeft="1em">
            Explore new languages!
          </Text>
        </Container>
      </Box>
      <Box w="100%" h="100%" bgColor="white">
        <Container
          maxW="4xl"
          minHeight="sm"
          alignItems="center"
          color="primary.dark"
        >
          <Text
            fontSize="3xl"
            maxW="2xl"
            textAlign={["left", "center"]}
            marginY="1em"
          >
            Explore new worlds and possibilities by learning new languages.
          </Text>
          <Container
            maxW="4xl"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            marginBottom="1rem"
          >
            <Image
              maxW="33%"
              borderRadius="5px"
              src="/assets/christin-hume-Hcfwew744z4-unsplash.jpg"
              alt="learning languages"
            />
            <Image
              maxW="33%"
              borderRadius="5px"
              src="/assets/jan-kopriva-SCEywLgwj2E-landscape.jpg"
              alt="learning languages"
            />
            <Image
              maxW="33%"
              borderRadius="5px"
              src="/assets/soundtrap-C-2Wky-LT7k-unsplash.jpg"
              alt="learning languages"
            />
          </Container>
        </Container>
      </Box>
      <Box w="100%" h="100%" bgColor="secondary.dark">
        <Container
          maxW="3xl"
          minHeight="lg"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="3xl" textAlign={["right"]} marginRight="1.5em">
            Check out interesting bits about other languages!
          </Text>
          <Image
            borderRadius="5px"
            boxSize="70%"
            maxH="md"
            src="/assets/emmanuel-ikwuegbu-81fRHbVliQI-unsplash.jpg"
            alt="learning languages"
          />
        </Container>
      </Box>
      <Box
        w="100%"
        h="100%"
        bgGradient="linear(to-r, primary.light, tertiary.light)"
      >

        {/* <Container
          maxW="3xl"
          minHeight="sm"
          color="white"
          display="flex"
          alignItems="center"
        >
          <Text fontSize="3xl" textAlign={["left", "center"]} paddingY="1rem">
            Join Our Community of Passionate Languages Learners!
          </Text>
          <Button
            bgColor="primary.dark"
            color="white"
            justifyContent="center"
            paddingX="3em"
            paddingY="1.35em"
          >
            <Link href="/signup">
              <ArrowRightIcon marginRight=".5rem" /> Create a New Account
            </Link>
          </Button>
        </Container> */}
      </Box>
    </Flex>
  );
}
