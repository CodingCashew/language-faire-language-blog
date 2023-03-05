import {
  Card,
  CardBody,
  Container,
  Text,
  Image,
  Link,
  Button
} from "@chakra-ui/react";

function Speaking() {
  const speaking = [
  {
    id:'1',
    title: 'Basic Chit-chat',
    path: '/assets/speaking.jpg'
  },
  {
    id:'2',
    title: 'Talking About Vacations',
    path: '/assets/speaking.jpg'
  },
]
  return (
    <Container maxW="xl">
      <Text fontSize='xl' m={3}>Speaking Practice</Text>
      <Container>
      {speaking.map(prac => (
        <Card mt={2} key={prac.id}>
          <CardBody>
            <Image src={prac.path} alt="language blog logo" w="75%" />
            <Text>{prac.title}</Text>
            <Link href={`/speaking/${prac.id}`}>
              <Button bgColor="primary.main" m="1rem" color="white">
                Go To Speaking Practice >
              </Button>
            </Link>
          </CardBody>
        </Card>
      ))}
      </Container>
    </Container>
  );
}

export default Speaking;

// export async function getServerSideProps(context: any) {
//   console.log("in getSSP");
//   let res = await fetch("http://localhost:3000/api/speaking", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   let articles = await res.json();
//   return {
//     props: { articles },
//   };
// }
