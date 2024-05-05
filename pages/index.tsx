import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import { FaRegMap } from "react-icons/fa6";

export default function Home() {
  return (
    <Flex direction="column" w="100%">
      <Head>
        <title>Home</title>
        <link rel="icon" href="../logo.png" sizes="any" />
      </Head>
      <Flex
        minHeight="md"
        color="white"
        justify="center"
        align="center"
        gap={5}
        bgGradient="linear(to-br, primary.main, secondary.light)"
        wrap={{ base: "wrap", md: "nowrap" }}
      >
        <Image
          borderRadius="5px"
          maxW={{ base: "sm", sm: "md", md: "lg", lg: "2xl" }}
          maxH={{ base: "xs", sm: "sm" }}
          p={5}
          src="/assets/jan-kopriva-SCEywLgwj2E-landscape.jpg"
          alt="learning languages"
        />
        <Flex
          direction="column"
          justify="start"
          maxW={{ base: "lg", md: "md" }}
          p={3}
        >
          <Text fontSize="3xl">
            Welcome to{" "}
            <Text as="span" color="primary.dark">
              Langfaring!
            </Text>
          </Text>
          <Text fontSize="xl" maxW="2xl" marginY="1em">
            Are you passionate about languages, cultures, and the fascinating
            world of linguistics?{" "}
          </Text>
        </Flex>
      </Flex>
      <Flex
        minH="md"
        align="center"
        justify="center"
        bgGradient="linear(to-b, primary.main, primary.dark)"
        direction="column"
        p={5}
      >
        <Text fontSize="xl" maxW="2xl" mb={10} color="white">
          Do you find yourself on a journey of discovery, seeking to unlock the
          mysteries of communication and connection across borders and barriers?
        </Text>
        <Flex
          maxW="4xl"
          display="flex"
          flexWrap="wrap"
          justify="center"
          marginBottom="1rem"
          wrap="wrap"
          gap={3}
        >
          <Image
            borderRadius="5px"
            maxW="30%"
            src="/assets/dylan-ferreira-HJmxky8Fvmo-unsplash.jpg"
            alt="learning languages"
          />
          <Image
            maxW="30%"
            borderRadius="5px"
            src="/assets/kelly-sikkema-et5mfj1eB94-unsplash.jpg"
            alt="learning languages"
          />
          <Image
            maxW="30%"
            borderRadius="5px"
            src="/assets/michael-baron-YQSXw2YVqyU-unsplash.jpg"
            alt="learning languages"
          />
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        bgGradient="linear(to-r, primary.main, secondary.main)"
        justify="center"
        p={5}
      >
        <Flex
          minHeight="sm"
          align="center"
          justify="center"
          color="primary.dark"
          maxW="3xl"
          direction="column"
          p={5}
          gap={7}
        >
          <Image
            borderRadius="5px"
            maxH={{ base: "xs", sm: "sm" }}
            p={5}
            src="/assets/unseen-studio-s9CC2SKySJM-unsplash.jpg"
            alt="learning languages"
          />
          <Text fontSize="xl" color="white" align="center">
            At Langfaring, we understand the challenges and excitement of
            embarking on a language journey.
          </Text>
          <Text fontSize="xl" color="white" align="center">
            Whether you&apos;re a seasoned polyglot or just beginning to explore
            the vast landscape of languages, we&apos;re here to be your guide
            and your source of inspiration.
          </Text>
        </Flex>
      </Flex>
      <Flex
        minHeight="md"
        color="white"
        justify="center"
        align="center"
        gap={5}
        bgGradient="linear(to-r, tertiary.dark, tertiary.light)"
        wrap={{ base: "wrap", md: "nowrap" }}
      >
        <Flex
          minHeight="sm"
          align="center"
          justify="center"
          color="black"
          maxW="4xl"
          p={5}
          gap={7}
          wrap={{ base: "wrap-reverse", md: "nowrap" }}
        >
          <Flex direction="column">
            <Text fontSize="2xl" my={4}>
              Meet Our Guide
            </Text>
            <Text fontSize="lg" my={3}>
              Hi, I&apos;m Liz, the founder of Langfaring. As a language
              enthusiast and lifelong learner, I&apos;ve embarked on my own
              journey through the rich tapestry of languages and cultures. Along
              the way, I&apos;ve encountered obstacles, celebrated
              breakthroughs, and discovered the transformative power of language
              learning.
            </Text>
            <Text fontSize="lg" my={3}>
              Now, I&apos;m here to share my knowledge, experiences, and
              insights with you. Together, we&apos;ll navigate the complexities
              of language acquisition, explore the nuances of linguistic
              diversity, and celebrate the beauty of cultural exchange.
            </Text>
          </Flex>
          <Image
            borderRadius="5px"
            maxH={{ base: "xs", sm: "sm" }}
            p={5}
            src="/assets/bitmoji.png"
            alt="learning languages"
          />
        </Flex>
      </Flex>
      <Flex
        bgGradient="linear(to-b, secondary.main, primary.light)"
        justify="center"
      >
        <Flex
          maxW="3xl"
          minHeight="lg"
          color="white"
          display="flex"
          justify="center"
          align="center"
          direction="column"
          gap={5}
          p={5}
          fontSize="xl"
        >
          <FaRegMap style={{ fontSize: "60px" }} />
          <Text fontSize="2xl">Your Path to Success</Text>
          <Text>
            {" "}
            Are you ready to explore new languages or embark on your own
            language journey? Whether you&apos;re learning a new language for
            travel, work, or personal enrichment, Langfaring provides the
            resources, guidance, and support you need to succeed.
          </Text>
          <Text>
            From practical tips and strategies to thought-provoking articles and
            engaging content, we&apos;re committed to empowering you on your
            language learning adventure. Let&apos;s embark on this journey
            together and unlock the boundless possibilities that language and
            culture have to offer.
          </Text>
          <Text alignSelf="start">
            The world of languages awaits. Are you ready to explore?
          </Text>
          <Link href="/articles">
            <Button bgColor="primary.dark" color="white" my={3}>
              Check Out Our Articles
              <ChevronRightIcon />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
