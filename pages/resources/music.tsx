import { Container, Text, Flex, Card, CardBody, Image, Button, Link } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { resourcesLinks } from "../../components/sidebarLinks";

const musicLinks = [
  {
    id: "1",
    artist: "Jewel",
    songName: "You Were Meant For Me",
    songPath: "you-were-meant-for-me",
    imgPath: "/assets/you-were-meant-for-me.png",
    genre: "",
    endpoint: "4WW4qcmrJ3E",
  },
  {
    id: "2",
    artist: "Pharrell Williams",
    songName: "Happy",
    songPath: "happy",
    imgPath: "/assets/happy.png",
    genre: "",
    endpoint: "rlWANMam4qk",
  },
  {
    id: "3",
    artist: "The Presidents of the United States of America",
    songName: "Peaches",
    songPath: "peaches",
    imgPath: "/assets/peaches.png",
    genre: "",
    endpoint: "VvcohzJvviQ",
  },
  {
    id: "4",
    artist: "Napalm Death",
    songName: "Suffer the Children",
    songPath: "suffer-the-children",
    imgPath: "/assets/suffer-the-children.png",
    genre: "",
    endpoint: "K9o33gocD50",
  },
];

export default function Music() {
  return (
    <Container maxW="6xl" minH="sm">
      <Flex maxW="4xl">
        <Sidebar links={resourcesLinks} section="resources" />
        <Flex flexDirection="column" gap={3}>
          {musicLinks.map((musicLink) => (
            // <Container key={musicLink.id}>
            //   <iframe
            //     width="504"
            //     height="378"
            //     src={`https://www.youtube.com/embed/${musicLink.endpoint}`}
            //   ></iframe>
            // </Container>
            <Card mt={2} key={musicLink.id}>
              <CardBody>
                <Image
                  src={musicLink.imgPath}
                  alt="language blog logo"
                  w="75%"
                />
                <Text>{musicLink.songName} by {musicLink.artist}</Text>
                <Link href={`/resources/music/${musicLink.songPath}`}>
                  <Button bgColor="primary.main" m="1rem" color="white">
                    Go To Song
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}
