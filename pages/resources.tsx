import {
  Container,
  Text,
  Flex,
  Box,
  Link,
  Spacer,
  Card,
  Image,
  Stack,
  Heading,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import Sidebar from "../components/sidebar"

function Resources() {
  const listOfLinks = [{label: "General Resources", value: 'general'}, {label: "Cheat Sheets", value: 'pdf'}, {label: "English Games", value: 'games'}, {label: "Learn with Music", value: 'music'}, {label: "YouTube Videos", value: 'youtube'}, {label: "Podcast", value: 'podcast'}]
  return (
    <Container maxW="7xl" minH="sm" >
      <Box>
        <Text align="center" fontSize="2xl">Best Resources Ever</Text>
        <Flex>
          <Sidebar items={listOfLinks}  />
          <Flex maxW="2xl" alignContent='flex-start' minH="sm">
            <Card minW="2xl" align="flex-start" backgroundColor="teal">
              <CardBody></CardBody>
            </Card>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default Resources;
